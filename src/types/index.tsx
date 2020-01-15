export interface IProps {}

export interface IAccount {
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

export interface IContact {
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

export interface IOpp {
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

export interface IFileObj {
  base64: string | ArrayBuffer | null;
  filename: string;
  type: string;
  size: number;
}

export interface IState {
  type: string | string[] | null | undefined;
  external_id: string | string[] | null | undefined;
  folder_id: string;
  files: IFileObj[];
  client_ip: string;
  signature: string[][];
  account: IAccount;
  opp: IOpp;
  contact: IContact[];
  loading: boolean;
  application_finished: boolean;
  showErrorMsg: boolean;
  errorMessage: string | string[] | null | undefined;
}
