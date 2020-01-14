import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { formatPhoneNumber } from "../utils";
import { FastField } from "formik";

export default function EquipmentInformation({ errors, values, touched }) {
  return (
    <div>
      <h2 className="text-3xl pl-1 pt-10 text-center uppercase py-4">Equipment &amp; Vendor Information</h2>
      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.vendor_name" label="Vendor Name">
            {({ field, form, meta }) => {
              console.log(meta);
              return (
                <TextField
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? "This field is required" : ""}
                  label="Vendor Name"
                  type="text"
                  variant="filled"
                  fullWidth
                />
              );
            }}
          </FastField>
        </div>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.vendor_phone" label="Vendor Phone">
            {({ field, form, meta }) => {
              return (
                <NumberFormat
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? "This field is required" : ""}
                  label="Vendor Phone"
                  type="tel"
                  fullWidth
                  autoComplete="off"
                  variant="filled"
                  isNumericString
                  customInput={TextField}
                  format={formatPhoneNumber}
                />
              );
            }}
          </FastField>
        </div>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.vendor_email" label="Vendor Email(optional)">
            {({ field, form, meta }) => {
              return <TextField {...field} label="Vendor Email" variant="filled" type="text" fullWidth />;
            }}
          </FastField>
        </div>


        
      </div>

      


      <div className="flex flex-wrap justify-around">
      <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.equipment_description" label="Equipment Description">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? "This field is required" : ""}
                  label="Equipment Description"
                  type="text"
                  variant="filled"
                  fullWidth
                />
              );
            }}
          </FastField>
        </div>

        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.equipment_condition" label="Equipment Condition">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? "This field is required" : ""}
                  label="Equipment Condition"
                  select
                  variant="filled"
                  fullWidth
                >
                  <MenuItem value="New">New</MenuItem>
                  <MenuItem value="Used">Used</MenuItem>
                </TextField>
              );
            }}
          </FastField>
        </div>

        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.equipment_cost" label="Equipment Cost">
            {({ field, form, meta }) => {
              return (
                <NumberFormat
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? "This field is required" : ""}
                  label="Equipment Cost"
                  type="tel"
                  fullWidth
                  autoComplete="off"
                  variant="filled"
                  isNumericString
                  customInput={TextField}
                  thousandSeparator={true}
                  isAllowed={value => {
                    if (value.floatValue > 1000000) {
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
          <FastField name="opp.have_quote_invoice" label="Have invoice or quote?">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? "This field is required" : ""}
                  label="Have invoice or quote?"
                  select
                  fullWidth
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
          <FastField name="opp.equipment_desired_term" label="Desired Term">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? "This field is required" : ""}
                  label="Desired Term"
                  select
                  fullWidth
                  variant="filled"
                >
                  <MenuItem value="24">24 months</MenuItem>
                  <MenuItem value="36">36 months</MenuItem>
                  <MenuItem value="48">48 months</MenuItem>
                  <MenuItem value="60">60 months</MenuItem>
                </TextField>
              );
            }}
          </FastField>
        </div>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField label="Purchase Option" name="opp.equipment_purchase_option">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? "This field is required" : ""}
                  label="Purchase Option"
                  select
                  variant="filled"
                  fullWidth
                >
                  <MenuItem value="$1 Lease Buyout">$1 Lease Buyout</MenuItem>
                  <MenuItem value="Equipment Finance Agreement">Equipment Finance Agreement</MenuItem>
                  <MenuItem value="Fair Market Value">Fair Market Value</MenuItem>
                  <MenuItem value="I'm not sure">I'm not sure</MenuItem>
                </TextField>
              );
            }}
          </FastField>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
      <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.vendor_street" label="Street Address">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? "This field is required" : ""}
                  label="Street Address"
                  variant="filled"
                  type="text"
                  fullWidth
                />
              );
            }}
          </FastField>
        </div>

        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.vendor_city" label="City">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? "This field is required" : ""}
                  label="City"
                  variant="filled"
                  type="text"
                  fullWidth
                />
              );
            }}
          </FastField>
        </div>

        <div className="lg:w-1/3 w-full py-4 flex">
        <div className="px-2 w-1/2 w-full">
          <FastField name="opp.vendor_state" label="State">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? "This field is required" : ""}
                  label="State"
                  select
                  fullWidth
                  autoComplete="off"
                  variant="filled"
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
        <div className="px-2 w-1/2 w-full">
          <FastField name="opp.vendor_zip" label="Zip Code">
            {({ field, form, meta }) => {
              return (
                <NumberFormat
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error ? "This field is required" : ""}
                  label="Zip Code"
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
    </div>
  );
}
