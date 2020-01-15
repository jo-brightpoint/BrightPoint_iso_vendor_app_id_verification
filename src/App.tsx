import * as React from "react";
import { Redirect } from "react-router-dom";
import queryString from "query-string";
import Layout from "./shared/Layout";
import Header from "./components/Header";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

import { Formik, FieldArray, FormikProps } from "formik";
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

const theme: Theme = createMuiTheme();

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
    }
  },
  MuiListItem: {
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

interface Props {}

interface Account {
  company: string;
  dba: string;
  legal_entity_type: string;
  state_of_org: string;
  business_category: string;
  type_of_product_services_sold: string;
  home_based: string;
  business_start_date: string;
  num_of_employees: string;
  business_website: string;
  business_location_street: string;
  business_location_city: string;
  business_location_state: string;
  business_location_zipcode: string;
  rent_or_own: string;
  monthly_rent_mortgage_payment: string;
  tax_id: string;
}

interface Contact {
  first_name: string;
  last_name: string;
  ownership_range: string;
  title: string;
  mobilephone: string;
  email: string;
  date_of_birth: string;
  ssn: string;
  fico_score: string;
  pref_language: string;
  mailing_street: string;
  mailing_city: string;
  mailing_state: string;
  mailing_zip: string;
  has_current_judgment: string;
  has_previous_judgment: string;
  residency_type: string;
  bankruptcy_history: string;
  driver_license: string;
}

interface Opp {
  type: string;
  amount_requested_exact: string;
  important_factor: string;
  how_fast: string;
  collateral_option: string;
  avg_monthly_revenue: string;
  cc_sales_ratio: string;
  daily_balance_range: string;
  filed_previous_taxreturn: string;
  has_online_banking: string;
  loan_history: string;
  vendor_name: string;
  vendor_website: string;
  vendor_email: string;
  vendor_phone: string;
  vendor_street: string;
  vendor_city: string;
  vendor_state: string;
  vendor_zip: string;
  equipment_condition: string;
  equipment_cost: string;
  equipment_description: string;
  equipment_desired_term: string;
  equipment_purchase_option: string;
  have_quote_invoice: string;
}

interface State {
  type: string | string[] | null | undefined;
  external_id: string | string[] | null | undefined;
  folder_id: string;
  files: FileObj[];
  client_ip: string;
  signature: string[][];
  account: Account;
  opp: Opp;
  contact: Contact[];
  loading: boolean;
  application_finished: boolean;
  showErrorMsg: boolean;
  errorMessage: string | string[] | null | undefined;
}

interface FileObj {
  base64: string | ArrayBuffer | null;
  filename: string;
  type: string;
  size: number;
}

class App extends React.Component<Props, State> {
  state: State = {
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

  submitHandler = (values: State) => {
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
        const newFiles: Array<FileObj> = this.state.files && [...this.state.files];
        let newFileObj: FileObj = {
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
    this.setState((prevState: State) => {
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
              {({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting, setFieldValue }: FormikProps<State>) => (
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
