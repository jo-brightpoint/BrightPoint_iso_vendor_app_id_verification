import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { FastField } from "formik";

import { formatTaxId } from "../utils";
import { formatPhoneNumber } from "../utils";

export default function BusinessInformation({ values, errors, touched }) {
  return (
    <div>
      <h2 className="text-xl pl-1 text-center py-4 capitalize">Business Information</h2>
      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="account.company" type="text" label="Business Legal name">
            {({ field, form: { touched, errors }, meta }) => {
              return (
                <TextField
                  {...field}
                  label="Business Legal name"
                  type="text"
                  variant="filled"
                  fullWidth
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                />
              );
            }}
          </FastField>
        </div>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="account.dba" type="text" label="DBA (Optional)">
            {({ field, form }) => (
              <TextField
                inputProps={{ className: "bg-white border-1 rounded-sm" }}
                variant="filled"
                {...field}
                label="DBA (Optional)"
                type="text"
                fullWidth
              />
            )}
          </FastField>
        </div>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField label="Federal Tax ID" name="account.tax_id">
            {({ field, form: { touched, error }, meta }) => {
              return (
                <NumberFormat
                  {...field}
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  label="Federal Tax ID"
                  type="tel"
                  fullWidth
                  autoComplete="off"
                  variant="filled"
                  isNumericString
                  customInput={TextField}
                  format={formatTaxId}
                />
              );
            }}
          </FastField>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="account.legal_entity_type" label="Business Entity Type">
            {({ field, form, meta }) => (
              <TextField
                label="Business Entity Type"
                {...field}
                error={meta.touched && !meta.value}
                helperText={meta.touched && !meta.value ? "This field is required" : ""}
                type="text"
                fullWidth
                select
                autoComplete="off"
                variant="filled"
              >
                <MenuItem value="Corporation">Corporation</MenuItem>
                <MenuItem value="LLC">LLC</MenuItem>
                <MenuItem value="Partnership">Partnership</MenuItem>
                <MenuItem value="Sole Proprietorship">Sole Proprietorship</MenuItem>
              </TextField>
            )}
          </FastField>
        </div>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="account.business_category" label="Business Category">
            {({ field, form, meta }) => (
              <TextField
                {...field}
                error={meta.touched && !meta.value}
                helperText={meta.touched && !meta.value ? "This field is required" : ""}
                label="Business Category"
                select
                variant="filled"
                fullWidth
              >
                <MenuItem value="Restaurants">Restaurants</MenuItem>
                <MenuItem value="Construction">Construction</MenuItem>
                <MenuItem value="Retail">Retail</MenuItem>
                <MenuItem value="Wholesale">Wholesale</MenuItem>
                <MenuItem value="Professional Services">Professional Services</MenuItem>
                <MenuItem value="Transportation">Transportation</MenuItem>
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="Medical/Dental">Medical/Dental</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </TextField>
            )}
          </FastField>
        </div>

        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="account.business_start_date" label="Business Start Date">
            {({ field, form: { touched, errors }, meta }) => {
              return (
                <TextField
                  {...field}
                  label="Business Start Date"
                  placeholder="02/2019"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                  type="text"
                  variant="filled"
                  fullWidth
                />
              );
            }}
          </FastField>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="account.num_of_employees" type="text" label="Number of Employees">
            {({ field, form: { touched, errors }, meta }) => {
              return (
                <TextField
                  {...field}
                  label="Number of Employees"
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  select
                  fullWidth
                  autoComplete="off"
                  variant="filled"
                >
                  <MenuItem value="Just me">Just me</MenuItem>
                  <MenuItem value="2 to 5">2 to 5</MenuItem>
                  <MenuItem value="6 to 10">6 to 10</MenuItem>
                  <MenuItem value="11 to 25">11 to 25</MenuItem>
                  <MenuItem value="26 or more">26 or more</MenuItem>
                </TextField>
              );
            }}
          </FastField>
        </div>

        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="account.phone" label="Business Phone">
            {({ field, form, meta }) => {
              return (
                <NumberFormat
                  {...field}
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  label="Business Phone"
                  type="tel"
                  fullWidth
                  autoComplete="off"
                  variant="filled"
                  isNumericString
                  format={formatPhoneNumber}
                  customInput={TextField}
                />
              );
            }}
          </FastField>
        </div>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="account.business_website_address" label="Business Website (Optional)">
            {({ field, form: { touched, errors }, meta }) => {
              return <TextField {...field} label="Business Website (Optional)" type="text" fullWidth variant="filled" />;
            }}
          </FastField>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="account.home_based" type="text" label="Home Based Business?">
            {({ field, form: { touched, errors }, meta }) => {
              return (
                <TextField
                  {...field}
                  label="Home Based Business?"
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  select
                  fullWidth
                  autoComplete="off"
                  variant="filled"
                >
                  <MenuItem value="YES">YES</MenuItem>
                  <MenuItem value="NO">NO</MenuItem>
                </TextField>
              );
            }}
          </FastField>
        </div>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField label="Rent or Own?" name="account.rent_or_own">
            {({ field, form: { touched, error }, meta }) => {
              return (
                <TextField
                  {...field}
                  label="Rent or Own?"
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  select
                  variant="filled"
                  fullWidth
                >
                  <MenuItem value="Rent/Lease">Rent/Lease</MenuItem>
                  <MenuItem value="Own">Own</MenuItem>
                </TextField>
              );
            }}
          </FastField>
        </div>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField label="Rent or Mortgage Payment" name="account.monthly_rent_mortgage_payment">
            {({ field, form: { touched, error }, meta }) => {
              return (
                <NumberFormat
                  {...field}
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  label="Rent or Mortgage Payment"
                  type="tel"
                  fullWidth
                  autoComplete="off"
                  variant="filled"
                  isNumericString
                  customInput={TextField}
                  thousandSeparator={true}
                  isAllowed={value => {
                    if (value.floatValue > 50000) {
                      return false;
                    }
                    return true;
                  }}
                  prefix={"$"}
                />
              );
            }}
          </FastField>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="account.business_location_street" label="Business Street Address">
            {({ field, form: { touched, errors }, meta }) => {
              return (
                <TextField
                  {...field}
                  label="Business Street Address"
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  type="text"
                  variant="filled"
                  fullWidth
                />
              );
            }}
          </FastField>
        </div>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField label="Business City" name="account.business_location_city">
            {({ field, form: { touched, errors }, meta }) => {
              return (
                <TextField
                  {...field}
                  label="Business City"
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  type="text"
                  variant="filled"
                  fullWidth
                />
              );
            }}
          </FastField>
        </div>

        <div className="lg:w-1/3 w-full py-4 flex">
          <div className="px-2 lg:w-1/2 w-full">
            <FastField name="account.business_location_state" label="State">
              {({ field, form: { touched, errors }, meta }) => {
                return (
                  <TextField
                    {...field}
                    label="State"
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    select
                    variant="filled"
                    fullWidth
                  >
                    <MenuItem value="AL">Alabama - AL</MenuItem>
                    <MenuItem value="AK">Alaska - AK</MenuItem>
                    <MenuItem value="AZ">Arizona - AZ</MenuItem>
                    <MenuItem value="AR">Arkansas - AR</MenuItem>
                    <MenuItem value="CA">California - CA</MenuItem>
                    <MenuItem value="CO">Colorado - CO</MenuItem>
                    <MenuItem value="CT">Connecticut - CT</MenuItem>
                    <MenuItem value="DE">Delaware - DE</MenuItem>
                    <MenuItem value="FL">Florida - FL</MenuItem>
                    <MenuItem value="GA">Georgia - GA</MenuItem>
                    <MenuItem value="HI">Hawaii - HI</MenuItem>
                    <MenuItem value="ID">Idaho - ID</MenuItem>
                    <MenuItem value="IL">Illinois - IL</MenuItem>
                    <MenuItem value="IN">Indiana - IN</MenuItem>
                    <MenuItem value="IA">Iowa - IA</MenuItem>
                    <MenuItem value="KS">Kansas - KS</MenuItem>
                    <MenuItem value="KY">Kentucky - KY</MenuItem>
                    <MenuItem value="LA">Louisiana - LA</MenuItem>
                    <MenuItem value="ME">Maine - ME</MenuItem>
                    <MenuItem value="MD">Maryland - MD</MenuItem>
                    <MenuItem value="MA">Massachusetts - MA</MenuItem>
                    <MenuItem value="MI">Michigan - MI</MenuItem>
                    <MenuItem value="MN">Minnesota - MN</MenuItem>
                    <MenuItem value="MS">Mississippi - MS</MenuItem>
                    <MenuItem value="MO">Missouri - MO</MenuItem>
                    <MenuItem value="MT">Montana - MT</MenuItem>
                    <MenuItem value="NE">Nebraska - NE</MenuItem>
                    <MenuItem value="NV">Nevada - NV</MenuItem>
                    <MenuItem value="NH">Hampshire - NH</MenuItem>
                    <MenuItem value="NJ">New Jersey - NJ</MenuItem>
                    <MenuItem value="NM">New Mexico - NM</MenuItem>
                    <MenuItem value="NY">New York - NY</MenuItem>
                    <MenuItem value="NC">North Carolina - NC</MenuItem>
                    <MenuItem value="ND">North Dakota - ND</MenuItem>
                    <MenuItem value="OH">Ohio - OH</MenuItem>
                    <MenuItem value="OK">Oklahoma - OK</MenuItem>
                    <MenuItem value="OR">Oregon - OR</MenuItem>
                    <MenuItem value="PA">Pennsylvania - PA</MenuItem>
                    <MenuItem value="RI">Rhode Island - RI</MenuItem>
                    <MenuItem value="SC">South Carolina - SC</MenuItem>
                    <MenuItem value="SD">South Dakota - SD</MenuItem>
                    <MenuItem value="TN">Tennessee - TN</MenuItem>
                    <MenuItem value="TX">Texas - TX</MenuItem>
                    <MenuItem value="UT">Utah - UT</MenuItem>
                    <MenuItem value="VT">Vermont - VT</MenuItem>
                    <MenuItem value="VA">Virginia - VA</MenuItem>
                    <MenuItem value="WA">Washington - WA</MenuItem>
                    <MenuItem value="WV">West Virginia - WV</MenuItem>
                    <MenuItem value="WI">Wisconsin - WI</MenuItem>
                    <MenuItem value="WY">Wyoming - WY</MenuItem>
                  </TextField>
                );
              }}
            </FastField>
          </div>
          <div className="px-2 lg:w-1/2 w-full">
            <FastField label="Zip Code" name="account.business_location_zipcode">
              {({ field, form: { touched, error }, meta }) => {
                return (
                  <NumberFormat
                    {...field}
                    label="Zip Code"
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    type="tel"
                    fullWidth
                    autoComplete="off"
                    variant="filled"
                    isNumericString
                    customInput={TextField}
                    isAllowed={value => {
                      if (value.formattedValue.length > 5) {
                        return false;
                      }
                      return true;
                    }}
                  />
                );
              }}
            </FastField>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around"></div>
      <div className="flex flex-wrap justify-around"></div>
      <div className="">
        <div className="px-2 w-full py-4">
          <FastField name="account.type_of_product_services_sold" label="Briefly describe your business - Product/Service">
            {({ field, form, meta }) => (
              <TextField
                {...field}
                error={meta.touched && !meta.value}
                helperText={meta.touched && !meta.value ? "This field is required" : ""}
                label="Briefly describe your business - Product/Service"
                type="text"
                variant="filled"
                fullWidth
              />
            )}
          </FastField>
        </div>
      </div>
    </div>
  );
}
