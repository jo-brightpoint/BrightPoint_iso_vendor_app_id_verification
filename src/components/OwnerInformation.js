import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { RHFInput } from "react-hook-form-input";
import { validateDate, formatPhoneNumber } from "../utils";
import { useFormContext } from "react-hook-form";

export default function OwnerInformation() {
  const { register, errors, setValue } = useFormContext();
  const [ownerCount, setOwnerCount] = useState(["owner1"]);

  const addOwner = () => {
    if (ownerCount.length === 2) return;
    setOwnerCount(prev => [...ownerCount, "owner2"]);
  };

  const removeOwner = () => {
    setOwnerCount(prev => {
      ownerCount.pop();
      return [...ownerCount];
    });
  };

  return (
    <div>
      {ownerCount.map((el, index) => {
        return (
          <div>
            <h2 className="text-3xl pl-1 pt-10">Owner Information</h2>
            <div className="flex flex-wrap justify-around">
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].first_name`}
                  error={!!errors[`contact[${index}].first_name`]}
                  label="Owner First Name"
                  helperText={errors[`contact[${index}].first_name`] ? errors[`contact[${index}].first_name`].message : ""}
                  type="text"
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                />
              </div>
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].last_name`}
                  error={!!errors[`contact[${index}].last_name`]}
                  label="Owner Last Name"
                  helperText={errors[`contact[${index}].last_name`] ? errors[`contact[${index}].last_name`].message : ""}
                  type="text"
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-around">
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].ownership_range`}
                  error={!!errors[`contact[${index}].ownership_range`]}
                  label="Ownership %"
                  helperText={errors[`contact[${index}].ownership_range`] ? errors[`contact[${index}].ownership_range`].message : ""}
                  select
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                  SelectProps={{
                    native: true
                  }}
                >
                  <option value="" />
                  <option value="100%">100%</option>
                  <option value="51% - 99%">51% - 99%</option>
                  <option value="50%">50%</option>
                  <option value="Less than 50%">Less than 50%</option>
                </TextField>
              </div>
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].title`}
                  error={!!errors[`contact[${index}].title`]}
                  label="Title"
                  helperText={errors[`contact[${index}].title`] ? errors[`contact[${index}].title`].message : ""}
                  select
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                  SelectProps={{
                    native: true
                  }}
                >
                  <option value="" />
                  <option value="Owner">Owner</option>
                  <option value="President">President</option>
                  <option value="CEO">CEO</option>
                  <option value="CFO">CFO</option>
                  <option value="Partner">Partner</option>
                </TextField>
              </div>
            </div>
            <div className="flex flex-wrap justify-around">
              <div className="px-2 lg:w-1/2 w-full py-4">
                <RHFInput
                  mode="onChange"
                  as={
                    <NumberFormat
                      label="Mobile Phone No."
                      type="tel"
                      fullWidth
                      autoComplete="off"
                      margin="normal"
                      isNumericString
                      format={formatPhoneNumber}
                      customInput={TextField}
                    />
                  }
                  register={register}
                  setValue={setValue}
                  rules={{ required: "This field is required" }}
                  name={`contact[${index}].mobilephone`}
                  helperText={errors[`contact[${index}].mobilephone`] ? errors[`contact[${index}].mobilephone`].message : ""}
                  error={!!errors[`contact[${index}].mobilephone`]}
                />
              </div>
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].email`}
                  error={!!errors[`contact[${index}].email`]}
                  label="Email Address"
                  helperText={errors[`contact[${index}].email`] ? errors[`contact[${index}].email`].message : ""}
                  type="text"
                  inputRef={register({
                    required: "This field is required",
                    pattern: {
                      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid Email Format."
                    }
                  })}
                  fullWidth
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-around">
              <div className="px-2 lg:w-1/2 w-full py-4">
                <RHFInput
                  mode="onChange"
                  as={
                    <NumberFormat
                      label="Date of Birth"
                      type="tel"
                      fullWidth
                      autoComplete="off"
                      margin="normal"
                      format={validateDate}
                      placeholder="01/01/2019"
                      customInput={TextField}
                    />
                  }
                  register={register}
                  setValue={setValue}
                  name={`contact[${index}].date_of_birth`}
                  error={!!errors[`contact[${index}].date_of_birth`]}
                  helperText={errors[`contact[${index}].date_of_birth`] ? errors[`contact[${index}].date_of_birth`].message : ""}
                  rules={{ required: "This field is required" }}
                />
              </div>
              <div className="px-2 lg:w-1/2 w-full py-4">
                <RHFInput
                  mode="onChange"
                  as={
                    <NumberFormat
                      label="Social Security No."
                      type="tel"
                      fullWidth
                      autoComplete="off"
                      margin="normal"
                      isNumericString
                      customInput={TextField}
                      format={val => {
                        return val.replace(/(\d{3})(\d{2})(\d{4})(\d)?$/, "$1 - $2 - $3");
                      }}
                    />
                  }
                  register={register}
                  setValue={setValue}
                  name={`contact[${index}].ssn`}
                  error={!!errors[`contact[${index}].ssn`]}
                  helperText={errors[`contact[${index}].ssn`] ? errors[`contact[${index}].ssn`].message : ""}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-around">
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].fico_score`}
                  error={!!errors[`contact[${index}].fico_score`]}
                  label="Estimated FICO"
                  helperText={errors[`contact[${index}].fico_score`] ? errors[`contact[${index}].fico_score`].message : ""}
                  select
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                  SelectProps={{
                    native: true
                  }}
                >
                  <option value="" />
                  <option value="Under 500">Under 500</option>
                  <option value="500 - 570">500 - 570</option>
                  <option value="570 - 620">570 - 620</option>
                  <option value="620 - 670">620 - 670</option>
                  <option value="670 - 720">670 - 720</option>
                  <option value="720 or higher">720 or higher</option>
                </TextField>
              </div>
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].pref_language`}
                  error={!!errors[`contact[${index}].pref_language`]}
                  label="Language Preference(optional)"
                  helperText={errors[`contact[${index}].pref_language`] ? errors[`contact[${index}].pref_language`].message : ""}
                  select
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                  SelectProps={{
                    native: true
                  }}
                >
                  <option value="" />
                  <option value="English">English</option>
                  <option value="Spanish">Español</option>
                  <option value="Korean">한국어</option>
                  <option value="Chinese">中國語</option>
                </TextField>
              </div>
            </div>

            <div className="flex flex-wrap justify-around">
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].mailing_street`}
                  error={!!errors[`contact[${index}].mailing_street`]}
                  label="Home Street"
                  helperText={errors[`contact[${index}].mailing_street`] ? errors[`contact[${index}].mailing_street`].message : ""}
                  type="text"
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                />
              </div>
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].mailing_city`}
                  error={!!errors[`contact[${index}].mailing_city`]}
                  label="Home City"
                  helperText={errors[`contact[${index}].mailing_city`] ? errors[`contact[${index}].mailing_city`].message : ""}
                  type="text"
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-around">
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].mailing_state`}
                  error={!!errors[`contact[${index}].mailing_state`]}
                  label="Home State"
                  helperText={errors[`contact[${index}].mailing_state`] ? errors[`contact[${index}].mailing_state`].message : ""}
                  select
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                  SelectProps={{
                    native: true
                  }}
                >
                  <option value="" />
                  <option value="Alabama - AL">Alabama - AL</option>
                  <option value="Alaska - AK">Alaska - AK</option>
                  <option value="Arizona - AZ">Arizona - AZ</option>
                  <option value="Arkansas - AR">Arkansas - AR</option>
                  <option value="California - CA">California - CA</option>
                  <option value="Colorado - CO">Colorado - CO</option>
                  <option value="Connecticut - CT">Connecticut - CT</option>
                  <option value="Delaware - DE">Delaware - DE</option>
                  <option value="Florida - FL">Florida - FL</option>
                  <option value="Georgia - GA">Georgia - GA</option>
                  <option value="Hawaii - HI">Hawaii - HI</option>
                  <option value="Idaho - ID">Idaho - ID</option>
                  <option value="Illinois - IL">Illinois - IL</option>
                  <option value="Indiana - IN">Indiana - IN</option>
                  <option value="Iowa - IA">Iowa - IA</option>
                  <option value="Kansas - KS">Kansas - KS</option>
                  <option value="Kentucky - KY">Kentucky - KY</option>
                  <option value="Louisiana - LA">Louisiana - LA</option>
                  <option value="Maine - ME">Maine - ME</option>
                  <option value="Maryland - MD">Maryland - MD</option>
                  <option value="Massachusetts - MA">Massachusetts - MA</option>
                  <option value="Michigan - MI">Michigan - MI</option>
                  <option value="Minnesota - MN">Minnesota - MN</option>
                  <option value="Mississippi - MS">Mississippi - MS</option>
                  <option value="Missouri - MO">Missouri - MO</option>
                  <option value="Montana - MT">Montana - MT</option>
                  <option value="Nebraska - NE">Nebraska - NE</option>
                  <option value="Nevada - NV">Nevada - NV</option>
                  <option value="Hampshire - NH">Hampshire - NH</option>
                  <option value="New Jersey - NJ">New Jersey - NJ</option>
                  <option value="New Mexico - NM">New Mexico - NM</option>
                  <option value="New York - NY">New York - NY</option>
                  <option value="North Carolina - NC">North Carolina - NC</option>
                  <option value="North Dakota - ND">North Dakota - ND</option>
                  <option value="Ohio - OH">Ohio - OH</option>
                  <option value="Oklahoma - OK">Oklahoma - OK</option>
                  <option value="Oregon - OR">Oregon - OR</option>
                  <option value="Pennsylvania - PA">Pennsylvania - PA</option>
                  <option value="Rhode Island - RI">Rhode Island - RI</option>
                  <option value="South Carolina - SC">South Carolina - SC</option>
                  <option value="South Dakota - SD">South Dakota - SD</option>
                  <option value="Tennessee - TN">Tennessee - TN</option>
                  <option value="Texas - TX">Texas - TX</option>
                  <option value="Utah - UT">Utah - UT</option>
                  <option value="Vermont - VT">Vermont - VT</option>
                  <option value="Virginia - VA">Virginia - VA</option>
                  <option value="Washington - WA">Washington - WA</option>
                  <option value="West Virginia - WV">West Virginia - WV</option>
                  <option value="Wisconsin - WI">Wisconsin - WI</option>
                  <option value="Wyoming - WY">Wyoming - WY</option>
                </TextField>
              </div>
              <div className="px-2 lg:w-1/2 w-full py-4">
                <RHFInput
                  mode="onChange"
                  as={
                    <NumberFormat
                      label="Home Zip Code"
                      type="tel"
                      fullWidth
                      autoComplete="off"
                      margin="normal"
                      isNumericString
                      // inputRef={register({
                      //   required: "This field is required"
                      // })}
                      customInput={TextField}
                      isAllowed={value => {
                        if (value.formattedValue.length > 5) {
                          return false;
                        }
                        return true;
                      }}
                    />
                  }
                  error={!!errors[`contact[${index}].mailing_zip`]}
                  helperText={errors[`contact[${index}].mailing_zip`] ? errors[`contact[${index}].mailing_zip`].message : ""}
                  name={`contact[${index}].mailing_zip`}
                  rules={{ required: "This field is required" }}
                  register={register}
                  setValue={setValue}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-around">
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].has_current_judgment`}
                  error={!!errors[`contact[${index}].has_current_judgment`]}
                  label="Do you currently have any judgment?"
                  helperText={
                    errors[`contact[${index}].has_current_judgment`] ? errors[`contact[${index}].has_current_judgment`].message : ""
                  }
                  select
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                  SelectProps={{
                    native: true
                  }}
                >
                  <option value="" />
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </TextField>
              </div>
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].has_previous_judgment`}
                  error={!!errors[`contact[${index}].has_previous_judgment`]}
                  label="Any lawsuits or judgment pending?"
                  helperText={
                    errors[`contact[${index}].has_previous_judgment`] ? errors[`contact[${index}].has_previous_judgment`].message : ""
                  }
                  select
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                  SelectProps={{
                    native: true
                  }}
                >
                  <option value="" />
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </TextField>
              </div>
            </div>

            <div className="flex flex-wrap justify-around">
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].residency_type`}
                  error={!!errors[`contact[${index}].residency_type`]}
                  label="What's your citizenship status"
                  helperText={errors[`contact[${index}].residency_type`] ? errors[`contact[${index}].residency_type`].message : ""}
                  select
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                  SelectProps={{
                    native: true
                  }}
                >
                  <option value="" />
                  <option value="U.S. Citizen">U.S. Citizen</option>
                  <option value="Permanent Resident">Permanent Resident</option>
                  <option value="Foreigner-E2 Visa">Foreigner-E2 Visa</option>
                </TextField>
              </div>
              <div className="px-2 lg:w-1/2 w-full py-4">
                <TextField
                  name={`contact[${index}].bankruptcy_history`}
                  error={!!errors[`contact[${index}].bankruptcy_history`]}
                  label="Any bankruptcy history?"
                  helperText={errors[`contact[${index}].bankruptcy_history`] ? errors[`contact[${index}].bankruptcy_history`].message : ""}
                  select
                  inputRef={register({
                    required: "This field is required"
                  })}
                  fullWidth
                  SelectProps={{
                    native: true
                  }}
                >
                  <option value="" />
                  <option value="No BK history">No BK history</option>
                  <option value="Filed BK but passed 7 yrs">Filed BK but passed 7 yrs</option>
                  <option value="Filed BK within past 7 yrs">Filed BK within past 7 yrs</option>
                </TextField>
              </div>
            </div>
          </div>
        );
      })}
      {ownerCount.length > 1 ? (
        <span onClick={removeOwner} className="text-lg text-gray-700">
          Remove owner
        </span>
      ) : (
        <span onClick={addOwner} className="text-lg text-gray-700">
          More than 1 owner in your business? Add another owner +
        </span>
      )}
    </div>
  );
}
