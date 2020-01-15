import * as React from "react";
import axios from "axios";
import queryString from "query-string";
import publicIp from "public-ip";

import { ThemeProvider } from "@material-ui/core/styles";
import { FieldArray, Formik, FormikProps } from "formik";
import { Redirect } from "react-router-dom";

import Header from "./components/Header";
import OwnerInformation from "./components/OwnerInformation";
import SignatureSection from "./components/SignatureSection";
import UploadDocument from "./components/UploadDocument";
import BusinessInformation from "./components/BusinessInformation";
import EquipmentInformation from "./components/EquipmentInformation";
import FinancialInformation from "./components/FinancialInformation";
import FinancingTypeContainer from "./components/FinancingTypeContainer";

import Layout from "./shared/Layout";
import theme from "./theme";
import { data } from "./data";
import { IFileObj, IProps, IState } from "./types";
import { schema as ApplicationValidation } from "./validationSchema";

class App extends React.Component<IProps, IState> {
  state: IState = {
    type: "",
    external_id: "",
    folder_id: "",
    client_ip: "",
    files: [],
    signature: [],
    loading: false,
    application_finished: false,
    showErrorMsg: false,
    errorMessage: "",
    account: {
      company: "",
      dba: "",
      legal_entity_type: "",
      state_of_org: "",
      business_category: "",
      type_of_product_services_sold: "",
      home_based: "",
      business_start_date: "",
      num_of_employees: "",
      business_website: "",
      business_location_street: "",
      business_location_city: "",
      business_location_state: "",
      business_location_zipcode: "",
      rent_or_own: "",
      monthly_rent_mortgage_payment: "",
      tax_id: ""
    },

    opp: {
      type: "",
      amount_requested_exact: "",
      important_factor: "",
      how_fast: "",
      collateral_option: "",
      avg_monthly_revenue: "",
      cc_sales_ratio: "",
      daily_balance_range: "",
      filed_previous_taxreturn: "",
      has_online_banking: "",
      loan_history: "",
      vendor_name: "",
      vendor_website: "",
      vendor_email: "",
      vendor_phone: "",
      vendor_street: "",
      vendor_city: "",
      vendor_state: "",
      vendor_zip: "",
      equipment_condition: "",
      equipment_cost: "",
      equipment_description: "",
      equipment_desired_term: "",
      equipment_purchase_option: "",
      have_quote_invoice: ""
    },

    contact: [
      {
        first_name: "",
        last_name: "",
        ownership_range: "",
        title: "",
        mobilephone: "",
        email: "",
        date_of_birth: "",
        ssn: "",
        fico_score: "",
        pref_language: "",
        mailing_street: "",
        mailing_city: "",
        mailing_state: "",
        mailing_zip: "",
        has_current_judgment: "",
        has_previous_judgment: "",
        residency_type: "",
        bankruptcy_history: "",
        driver_license: ""
      }
    ]
  };

  componentDidMount() {
    const url = window.location.href;
    const parsedURL = queryString.parseUrl(url);
    console.log(parsedURL);

    if (parsedURL) {
      this.setState({
        ...this.state,
        type: parsedURL.query.recType,
        external_id: parsedURL.query.id
      });
    }
  }

  submitHandler = (values: IState) => {
    window.scrollTo(0, 0);
    this.setState(
      {
        ...this.state,
        account: {
          ...values.account
        },
        contact: [...values.contact],
        opp: {
          ...values.opp
        },
        loading: true
      },
      () => {
        let axiosConfig = {
          headers: {
            "Content-Type": "application/json"
          }
        };

        publicIp.v4().then(ip =>
          this.setState({ client_ip: ip }, () => {
            console.log("ip fetched!", this.state.client_ip);
            axios
              .post(`${data.endpoint}`, this.state, axiosConfig)
              .then(res => {
                if (res.data.statusCode !== 200) {
                  console.log("something went wrong.");
                  if (res.data.statusCode === 400) {
                    this.setState(
                      {
                        showErrorMsg: true,
                        errorMessage: res.data.errors,
                        loading: false,
                        application_finished: false,
                        type: "redirect"
                      },
                      () => {
                        setTimeout(() => {
                          this.setState({
                            showErrorMsg: false
                          });
                        }, 1500);
                      }
                    );
                  } else if (res.data.statusCode === 9999) {
                    console.error("error!!!!");
                  }
                } else {
                  window.localStorage.removeItem("lead");
                  this.setState({
                    loading: false,
                    application_finished: true
                  });
                }
              })
              .catch(err => {
                console.error(err);
                console.log("catch called.");
                this.setState(
                  {
                    showErrorMsg: true,
                    loading: false,
                    application_finished: false
                  },
                  () => {
                    setTimeout(() => {
                      this.setState({
                        showErrorMsg: false
                      });
                    }, 1500);
                  }
                );
              });
          })
        );
      }
    );
  };

  onFileDrop = (file: any[]) => {
    for (let i = 0; i < file.length; i++) {
      const reader = new FileReader();
      reader.onload = e => {
        const newFiles: Array<IFileObj> = this.state.files && [...this.state.files];
        let newFileObj: IFileObj = {
          base64: reader.result,
          filename: file[i].name,
          type: file[i].type,
          size: file[i].size
        };

        newFiles.push(newFileObj);
        this.setState({
          files: newFiles
        });
      };

      reader.onerror = e => {
        console.log("error!");
        return;
      };

      reader.readAsDataURL(file[i]);
    }
  };

  removeFile = (name: string) => {
    this.setState({
      files: this.state.files.filter(file => file.filename !== name)
    });
  };

  getSignature = (signature: string[]) => {
    this.setState((prevState: IState) => {
      const newState = [...prevState.signature, signature];
      return {
        signature: newState
      };
    });
  };

  render() {
    return (
      <>
        {!this.state.loading && this.state.application_finished && <Redirect to={{ pathname: "/success" }} />}
        {this.state.loading ? (
          <div className="loading--apply_v2">
            <div className="spinner">
              <div className="spinner-a" />
              <div className="spinner-b" />
            </div>
          </div>
        ) : null}

        <Layout>
          <Header />
          <h1 className="text-2xl text-center py-4 capitalize text-bpc-navy mt-10">Complete Your Application</h1>
          <div className="container mx-auto bg-bpc-light-gray rounded-bpc shadow-bpc p-8 mt-10">
            <Formik
              enableReinitialize={false}
              initialValues={this.state}
              onSubmit={this.submitHandler}
              validationSchema={ApplicationValidation}
            >
              {({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting, setFieldValue }: FormikProps<IState>) => (
                <form
                  onSubmit={handleSubmit}
                  onKeyDown={e => {
                    if ((e.charCode || e.keyCode) === 13) {
                      e.preventDefault();
                    }
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <FinancingTypeContainer setFieldValue={setFieldValue} errors={errors} values={values} touched={touched} />
                    <BusinessInformation errors={errors} values={values} touched={touched} />

                    <FieldArray
                      name="contact"
                      render={helpers => (
                        <>
                          {values.contact &&
                            values.contact.map((cnct, index) => (
                              <OwnerInformation
                                key={index}
                                index={index}
                                errors={errors}
                                values={values}
                                touched={touched}
                                helpers={helpers}
                                setFieldValue={setFieldValue}
                              />
                            ))}
                        </>
                      )}
                    />

                    {values && values.opp.type === "Equipment Financing" ? (
                      <EquipmentInformation errors={errors} values={values} touched={touched} />
                    ) : (
                      <FinancialInformation errors={errors} values={values} touched={touched} />
                    )}
                  </ThemeProvider>

                  <UploadDocument files={this.state.files} onDrop={this.onFileDrop} removeFile={this.removeFile} />
                  <SignatureSection files={this.state.files} getSignature={this.getSignature} values={values} />
                </form>
              )}
            </Formik>
          </div>
        </Layout>
      </>
    );
  }
}

export default App;
