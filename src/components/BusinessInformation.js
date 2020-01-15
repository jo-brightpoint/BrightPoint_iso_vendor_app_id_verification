import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { FastField } from "formik";

import { formatTaxId } from "../utils";
import { formatPhoneNumber } from "../utils";

export default function BusinessInformation({ handleChange, handleBlur, values, errors, touched, onChange }) {
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
                    <MenuItem value="Alabama - AL">Alabama - AL</MenuItem>
                    <MenuItem value="Alaska - AK">Alaska - AK</MenuItem>
                    <MenuItem value="Arizona - AZ">Arizona - AZ</MenuItem>
                    <MenuItem value="Arkansas - AR">Arkansas - AR</MenuItem>
                    <MenuItem value="California - CA">California - CA</MenuItem>
                    <MenuItem value="Colorado - CO">Colorado - CO</MenuItem>
                    <MenuItem value="Connecticut - CT">Connecticut - CT</MenuItem>
                    <MenuItem value="Delaware - DE">Delaware - DE</MenuItem>
                    <MenuItem value="Florida - FL">Florida - FL</MenuItem>
                    <MenuItem value="Georgia - GA">Georgia - GA</MenuItem>
                    <MenuItem value="Hawaii - HI">Hawaii - HI</MenuItem>
                    <MenuItem value="Idaho - ID">Idaho - ID</MenuItem>
                    <MenuItem value="Illinois - IL">Illinois - IL</MenuItem>
                    <MenuItem value="Indiana - IN">Indiana - IN</MenuItem>
                    <MenuItem value="Iowa - IA">Iowa - IA</MenuItem>
                    <MenuItem value="Kansas - KS">Kansas - KS</MenuItem>
                    <MenuItem value="Kentucky - KY">Kentucky - KY</MenuItem>
                    <MenuItem value="Louisiana - LA">Louisiana - LA</MenuItem>
                    <MenuItem value="Maine - ME">Maine - ME</MenuItem>
                    <MenuItem value="Maryland - MD">Maryland - MD</MenuItem>
                    <MenuItem value="Massachusetts - MA">Massachusetts - MA</MenuItem>
                    <MenuItem value="Michigan - MI">Michigan - MI</MenuItem>
                    <MenuItem value="Minnesota - MN">Minnesota - MN</MenuItem>
                    <MenuItem value="Mississippi - MS">Mississippi - MS</MenuItem>
                    <MenuItem value="Missouri - MO">Missouri - MO</MenuItem>
                    <MenuItem value="Montana - MT">Montana - MT</MenuItem>
                    <MenuItem value="Nebraska - NE">Nebraska - NE</MenuItem>
                    <MenuItem value="Nevada - NV">Nevada - NV</MenuItem>
                    <MenuItem value="Hampshire - NH">Hampshire - NH</MenuItem>
                    <MenuItem value="New Jersey - NJ">New Jersey - NJ</MenuItem>
                    <MenuItem value="New Mexico - NM">New Mexico - NM</MenuItem>
                    <MenuItem value="New York - NY">New York - NY</MenuItem>
                    <MenuItem value="North Carolina - NC">North Carolina - NC</MenuItem>
                    <MenuItem value="North Dakota - ND">North Dakota - ND</MenuItem>
                    <MenuItem value="Ohio - OH">Ohio - OH</MenuItem>
                    <MenuItem value="Oklahoma - OK">Oklahoma - OK</MenuItem>
                    <MenuItem value="Oregon - OR">Oregon - OR</MenuItem>
                    <MenuItem value="Pennsylvania - PA">Pennsylvania - PA</MenuItem>
                    <MenuItem value="Rhode Island - RI">Rhode Island - RI</MenuItem>
                    <MenuItem value="South Carolina - SC">South Carolina - SC</MenuItem>
                    <MenuItem value="South Dakota - SD">South Dakota - SD</MenuItem>
                    <MenuItem value="Tennessee - TN">Tennessee - TN</MenuItem>
                    <MenuItem value="Texas - TX">Texas - TX</MenuItem>
                    <MenuItem value="Utah - UT">Utah - UT</MenuItem>
                    <MenuItem value="Vermont - VT">Vermont - VT</MenuItem>
                    <MenuItem value="Virginia - VA">Virginia - VA</MenuItem>
                    <MenuItem value="Washington - WA">Washington - WA</MenuItem>
                    <MenuItem value="West Virginia - WV">West Virginia - WV</MenuItem>
                    <MenuItem value="Wisconsin - WI">Wisconsin - WI</MenuItem>
                    <MenuItem value="Wyoming - WY">Wyoming - WY</MenuItem>
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
