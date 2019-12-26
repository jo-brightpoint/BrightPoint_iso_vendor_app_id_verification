import { object, string, date, array } from "yup";

export const schema = object().shape({
  // account: object().shape({
  //   company: string().required("Business Name is required"),
  //   legal_entity_type: string().required("Business Entity Type is required"),
  //   state_of_org: string().required("State of Incorporation is required"),
  //   business_category: string().required("Business category is required"),
  //   type_of_product_services_sold: string().required("Type of Product / Service is required"),
  //   home_based: string().required("This field is required"),
  //   business_start_date: string()
  //     .required("Business start date is required")
  //     .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4})$/, { message: "Invalid format ex) 02/2019" }),
  //   num_of_employees: string().required("# of Employees is required"),
  //   business_location_street: string().required("Business street is required"),
  //   business_location_city: string().required("Business city is required"),
  //   business_location_state: string().required("Business state is required"),
  //   business_location_zipcode: string().required("Business ZipCode is required"),
  //   rent_or_own: string().required("This field is required"),
  //   monthly_rent_mortgage_payment: string().required("This field is required"),
  //   tax_id: string()
  // }),
  // contact: array().of(
  //   object().shape({
  //     first_name: string().required("This field is required"),
  //     last_name: string().required("This field is required"),
  //     ownership_range: string().required("This field is required"),
  //     title: string().required("This field is required"),
  //     mobilephone: string().required("This field is required"),
  //     email: string().required("This field is required"),
  //     date_of_birth: string().required("This field is required"),
  //     ssn: string().required("This field is required"),
  //     fico_score: string().required("This field is required"),
  //     pref_language: string().required("This field is required"),
  //     mailing_street: string().required("This field is required"),
  //     mailing_city: string().required("This field is required"),
  //     mailing_state: string().required("This field is required"),
  //     mailing_zip: string().required("This field is required"),
  //     has_current_judgment: string().required("This field is required"),
  //     has_previous_judgment: string().required("This field is required"),
  //     residency_type: string().required("This field is required"),
  //     bankruptcy_history: string().required("This field is required")
  //   })
  // ),
  opp: object().shape({
    amount_requested_exact: string().required("This field is required"),
    important_factor: string().required("This field is required"),
    how_fast: string().required("This field is required"),
    collateral_option: string().required("This field is required"),
    avg_monthly_revenue: string().required("This field is required"),
    cc_sales_ratio: string().required("This field is required"),
    daily_balance_range: string().required("This field is required"),
    filed_previous_taxreturn: string().required("This field is required"),
    has_online_banking: string().required("This field is required"),
    loan_history: string().required("This field is required"),
    vendor_name: string().required("This field is required"),
    vendor_website: string().required("This field is required"),
    vendor_email: string().required("This field is required"),
    vendor_phone: string().required("This field is required"),
    vendor_street: string().required("This field is required"),
    vendor_city: string().required("This field is required"),
    vendor_state: string().required("This field is required"),
    vendor_zip: string().required("This field is required"),
    equipment_condition: string().required("This field is required"),
    equipment_cost: string().required("This field is required"),
    equipment_description: string().required("This field is required"),
    equipment_desired_term: string().required("This field is required"),
    equipment_purchase_option: string().required("This field is required")
  })
});
