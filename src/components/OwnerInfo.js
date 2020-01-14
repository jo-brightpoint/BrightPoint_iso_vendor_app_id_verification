import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { FastField } from "formik";
import { validateDate, formatPhoneNumber } from "../utils";

export default function OwnerInfo({ getValues, setFieldValue, handleChange, handleBlur, values, errors, touched, onChange, index, helpers }) {
  return (
    <div>
      <div>
        <h2 className="text-3xl pl-1 pt-10 text-center py-4 uppercase">Owner {index === 1 ? "2" : null} Information</h2>
        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].first_name`} label="Owner First Name">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Owner First Name"
                    type="text"
                    fullWidth
                    variant="filled"
                  />
                );
              }}
            </FastField>
          </div>
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].last_name`} label="Owner Last Name">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Owner Last Name"
                    type="text"
                    fullWidth
                    variant="filled"
                  />
                );
              }}
            </FastField>
          </div>
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].title`} label="Title">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    label="Title"
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    select
                    fullWidth
                    variant="filled"
                  >
                    <MenuItem value="Owner">Owner</MenuItem>
                    <MenuItem value="President">President</MenuItem>
                    <MenuItem value="CEO">CEO</MenuItem>
                    <MenuItem value="CFO">CFO</MenuItem>
                    <MenuItem value="Partner">Partner</MenuItem>
                  </TextField>
                );
              }}
            </FastField>
          </div>
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].ownership_range`} label="Ownership %">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Ownership %"
                    select
                    fullWidth
                    variant="filled"
                  >
                    <MenuItem value="100%">100%</MenuItem>
                    <MenuItem value="51% - 99%">51% - 99%</MenuItem>
                    <MenuItem value="50%">50%</MenuItem>
                    <MenuItem value="Less than 50%">Less than 50%</MenuItem>
                  </TextField>
                );
              }}
            </FastField>
          </div>
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].mobilephone`} label="Mobile Phone No.">
              {({ field, form, meta }) => {
                return (
                  <NumberFormat
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Mobile Phone No."
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
            <FastField name={`contact[${index}].email`} label="Email Address">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Email Address"
                    type="text"
                    variant="filled"
                    fullWidth
                  />
                );
              }}
            </FastField>
          </div>
        </div>


        {/* Equipment Financing */}

        {values.opp.type === 'Equipment Financing' ? (
        <>
        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField label="Date of Birth" name={`contact[${index}].date_of_birth`}>
              {({ field, form, meta }) => {
                return (
                  <NumberFormat
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Date of Birth"
                    type="tel"
                    fullWidth
                    autoComplete="off"
                    variant="filled"
                    format={validateDate}
                    placeholder="01/01/2019"
                    customInput={TextField}
                  />
                );
              }}
            </FastField>
          </div>
          
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].ssn`} label="Social Security No.">
              {({ field, form, meta }) => {
                return (
                  <NumberFormat
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Social Security No."
                    type="tel"
                    fullWidth
                    autoComplete="off"
                    variant="filled"
                    isNumericString
                    customInput={TextField}
                    format={val => {
                      return val.replace(/(\d{3})(\d{2})(\d{4})(\d)?$/, "$1 - $2 - $3");
                    }}
                  />
                );
              }}
            </FastField>
          </div>

          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].fico_score`} label="Estimated FICO">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Estimated FICO"
                    select
                    variant="filled"
                    fullWidth
                  >
                    <MenuItem value="Under 500">Under 500</MenuItem>
                    <MenuItem value="500 - 570">500 - 570</MenuItem>
                    <MenuItem value="570 - 620">570 - 620</MenuItem>
                    <MenuItem value="620 - 670">620 - 670</MenuItem>
                    <MenuItem value="670 - 720">670 - 720</MenuItem>
                    <MenuItem value="720 or higher">720 or higher</MenuItem>
                  </TextField>
                );
              }}
            </FastField>
          </div>
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].mailing_street`} label="Home Street Address">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Home Street Address"
                    type="text"
                    variant="filled"
                    fullWidth
                  />
                );
              }}
            </FastField>
          </div>
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].mailing_city`} label="Home City">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Home City"
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
              <FastField name={`contact[${index}].mailing_state`} label="State">
                {({ field, form, meta }) => {
                  return (
                    <TextField
                      {...field}
                      error={meta.touched && !meta.value}
                      helperText={meta.touched && !meta.value ? "This field is required" : ""}
                      name={`contact[${index}].mailing_state`}
                      label="State"
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
              <FastField name={`contact[${index}].mailing_zip`} label="Zip Code">
                {({ field, form, meta }) => {
                  return (
                    <NumberFormat
                      {...field}
                      error={meta.touched && !meta.value}
                      helperText={meta.touched && !meta.value ? "This field is required" : ""}
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
        </>
        )

        : 

        (
        <>
        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField label="Date of Birth" name={`contact[${index}].date_of_birth`}>
              {({ field, form, meta }) => {
                return (
                  <NumberFormat
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Date of Birth"
                    type="tel"
                    fullWidth
                    autoComplete="off"
                    variant="filled"
                    format={validateDate}
                    placeholder="01/01/2019"
                    customInput={TextField}
                  />
                );
              }}
            </FastField>
          </div>
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].driver_license`} label="Driver's License #">
              {({ field, form, meta }) => {
                return (
                  <NumberFormat
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Driver's License #"
                    type="tel"
                    fullWidth
                    autoComplete="off"
                    variant="filled"
                    isNumericString
                    customInput={TextField}
                    format={val => {
                      return val.replace(/(\d{3})(\d{2})(\d{4})(\d)?$/, "$1 - $2 - $3");
                    }}
                  />
                );
              }}
            </FastField>
          </div>
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].ssn`} label="Social Security No.">
              {({ field, form, meta }) => {
                return (
                  <NumberFormat
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Social Security No."
                    type="tel"
                    fullWidth
                    autoComplete="off"
                    variant="filled"
                    isNumericString
                    customInput={TextField}
                    format={val => {
                      return val.replace(/(\d{3})(\d{2})(\d{4})(\d)?$/, "$1 - $2 - $3");
                    }}
                  />
                );
              }}
            </FastField>
          </div>
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].fico_score`} label="Estimated FICO">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Estimated FICO"
                    select
                    variant="filled"
                    fullWidth
                  >
                    <MenuItem value="Under 500">Under 500</MenuItem>
                    <MenuItem value="500 - 570">500 - 570</MenuItem>
                    <MenuItem value="570 - 620">570 - 620</MenuItem>
                    <MenuItem value="620 - 670">620 - 670</MenuItem>
                    <MenuItem value="670 - 720">670 - 720</MenuItem>
                    <MenuItem value="720 or higher">720 or higher</MenuItem>
                  </TextField>
                );
              }}
            </FastField>
          </div>

          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].residency_type`} label="What's your citizenship status">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="What's your citizenship status"
                    select
                    fullWidth
                    variant="filled"
                  >
                    <MenuItem value="U.S. Citizen">U.S. Citizen</MenuItem>
                    <MenuItem value="Permanent Resident">Permanent Resident</MenuItem>
                    <MenuItem value="Foreigner-E2 Visa">Foreigner-E2 Visa</MenuItem>
                  </TextField>
                );
              }}
            </FastField>
          </div>

          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].pref_language`} label="Language Preference (optional)">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    label="Language Preference (optional)"
                    select
                    fullWidth
                    variant="filled"
                  >
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Spanish">Español</MenuItem>
                    <MenuItem value="Korean">한국어</MenuItem>
                    <MenuItem value="Chinese">中國語</MenuItem>
                  </TextField>
                );
              }}
            </FastField>
          </div>
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].has_current_judgment`} label="Have any judgment?">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Have any judgment?"
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
            <FastField name={`contact[${index}].has_previous_judgment`} label="Have any Pending Lawsuits?">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Have any Pending Lawsuits?"
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
            <FastField name={`contact[${index}].bankruptcy_history`} label="Have Bankruptcy History?">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Have Bankruptcy History?"
                    select
                    variant="filled"
                    fullWidth
                  >
                    <MenuItem value="No BK history">No BK history</MenuItem>
                    <MenuItem value="Filed BK but passed 7 yrs">Filed BK but passed 7 yrs</MenuItem>
                    <MenuItem value="Filed BK within past 7 yrs">Filed BK within past 7 yrs</MenuItem>
                  </TextField>
                );
              }}
            </FastField>
          </div>
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].mailing_street`} label="Home Street Address">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Home Street Address"
                    type="text"
                    variant="filled"
                    fullWidth
                  />
                );
              }}
            </FastField>
          </div>
          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name={`contact[${index}].mailing_city`} label="Home City">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="Home City"
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
              <FastField name={`contact[${index}].mailing_state`} label="State">
                {({ field, form, meta }) => {
                  return (
                    <TextField
                      {...field}
                      error={meta.touched && !meta.value}
                      helperText={meta.touched && !meta.value ? "This field is required" : ""}
                      name={`contact[${index}].mailing_state`}
                      label="State"
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
              <FastField name={`contact[${index}].mailing_zip`} label="Zip Code">
                {({ field, form, meta }) => {
                  return (
                    <NumberFormat
                      {...field}
                      error={meta.touched && !meta.value}
                      helperText={meta.touched && !meta.value ? "This field is required" : ""}
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
      </>
      )}
      </div>
    </div>
  );
}
