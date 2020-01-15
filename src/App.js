import React from "react";
import { Redirect } from "react-router-dom";
import queryString from "query-string";
import Layout from "./shared/Layout";
import Header from "./components/Header";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { Formik, FieldArray } from "formik";
import FinancingTypeContainer from "./components/FinancingTypeContainer";
import BusinessInformation from "./components/BusinessInformation";
import OwnerInformation from "./components/OwnerInformation";
import FinancialInformation from "./components/FinancialInformation";
import EquipmentInformation from "./components/EquipmentInformation";

import { schema as ApplicationValidation } from "./validationSchema";
import UploadDocument from "./components/UploadDocument";

import axios from "axios";
import publicIp from "public-ip";
import SignatureSection from "./components/SignatureSection";

import { data } from "./data";

const theme = createMuiTheme();

theme.overrides = {
  MuiFilledInput: {
    root: {
      "font-family": '"Messina","-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue","Arial", "sans-serif"',
      border: "1px solid #E5E5E5",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "#fff"
      },
      "&$focused": {
        backgroundColor: "#fff"
      },
      "&.Mui-error": {
        border: "1px solid #DE071C",
        backgroundColor: "#FEF0F0"
      }
    },
    underline: {
      "&:hover:before": {
        borderBottom: "0"
      },
      "&:before": {
        borderBottom: "0"
      },
      "&:after": {
        borderBottom: "0"
      },
      "&.Mui-focused:after": {
        border: "none"
      },
      "&.Mui-error:after": {
        border: "none"
      }
    }
  },
  MuiButton: {
    root: {
      "margin-left": ".5rem",
      "margin-top": ".5rem"
    }
  },
  MuiInputLabel: {
    root: {
      fontSize: "16px",
      fontFamily: "Messina"
    },
    focused: {
      color: "#666666 !important"
    }
  },
  MuiFormHelperText: {
    contained: {
      marginLeft: "0",
      fontWeight: "bold"
    }
  },
  MuiMenuItem: {
    root: {
      "&:last-child .MuiTouchRipple-root": {
        borderBottom: 0
      }
    },
    button: {
      backgroundColor: "#EBEBEB"
    }
  },
  MuiTouchRipple: {
    root: {
      borderBottom: "1px solid #eee",
      width: "90%",
      margin: "0 auto"
    }
  }
};

class App extends React.Component {
  state = {
    type: "",
    external_id: "",
    folder_id: "",
    files: [],
    signature: [],
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

  addOwner = () => {
    this.setState({
      ...this.state,
      contact: [
        ...this.state.contact,
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
          bankruptcy_history: ""
        }
      ]
    });
  };

  removeOwner = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        ...prevState,
        contact: prevState.contact.splice(0, 1)
      };
    });
  };

  submitHandler = (values, formikBag) => {
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
                    var errorMsg;

                    this.setState(
                      {
                        showErrorMsg: true,
                        errorMessage: res.data.errors,
                        loading: false,
                        application_finished: false,
                        signatureErrMsg: errorMsg,
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

  onFileDrop = file => {
    for (let i = 0; i < file.length; i++) {
      const reader = new FileReader();
      reader.onload = e => {
        const newFiles = this.state.files && [...this.state.files];
        let newFileObj = {
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

  removeFile = name => {
    this.setState({
      files: this.state.files.filter(file => file.filename !== name)
    });
  };

  getSignature = signature => {
    this.setState(prevState => {
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
              {({ values, errors, touched, handleChange, handleSubmit, isSubmitting, handleBlur, setFieldValue }) => (
                <form
                  onSubmit={handleSubmit}
                  onKeyDown={e => {
                    if ((e.charCode || e.keyCode) === 13) {
                      e.preventDefault();
                    }
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <FinancingTypeContainer
                      setFieldValue={setFieldValue}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errors={errors}
                      values={values}
                      touched={touched}
                    />
                    <BusinessInformation
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errors={errors}
                      values={values}
                      touched={touched}
                    />

                    <FieldArray
                      name="contact"
                      render={helpers => (
                        <>
                          {values.contact &&
                            values.contact.map((cnct, index) => (
                              <OwnerInformation
                                key={index}
                                index={index}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors}
                                values={values}
                                state={this.state.contact}
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
                      <FinancialInformation
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        errors={errors}
                        values={values}
                        touched={touched}
                      />
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
