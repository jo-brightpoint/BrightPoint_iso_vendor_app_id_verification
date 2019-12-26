import React from "react";
import { TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { useFormContext } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";

export default function BusinessInformation() {
  const { register, errors, setValue } = useFormContext();
  return (
    <div>
      <h2 className="text-3xl pl-1 pt-10">Business Information</h2>
      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="account.company"
            error={!!errors["account.company"]}
            label="Business Legal Name"
            helperText={errors["account.company"] ? errors["account.company"].message : ""}
            type="text"
            inputRef={register({
              required: "This field is required"
            })}
            fullWidth
          />
        </div>
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="account.dba"
            label="Business DBA Name(optional)"
            inputRef={register({
              required: "This field is required"
            })}
            type="text"
            fullWidth
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="account.legal_entity_type"
            error={!!errors["account.legal_entity_type"]}
            label="Business Entity Type"
            helperText={errors["account.legal_entity_type"] ? errors["account.legal_entity_type"].message : ""}
            type="text"
            inputRef={register({
              required: "This field is required"
            })}
            fullWidth
            select
            autoComplete="off"
            margin="normal"
            SelectProps={{
              native: true
            }}
          >
            <option value="" />
            <option value="Corporation">Corporation</option>
            <option value="LLC">LLC</option>
            <option value="Partnership">Partnership</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
          </TextField>
        </div>
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="account.state_of_org"
            error={!!errors["account.state_of_org"]}
            label="State of Incorportation"
            inputRef={register({
              required: "This field is required"
            })}
            helperText={errors["account.state_of_org"] ? errors["account.state_of_org"].message : ""}
            select
            fullWidth
            autoComplete="off"
            margin="normal"
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
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="account.business_category"
            error={!!errors["account.business_category"]}
            label="Business Category"
            helperText={errors["account.business_category"] ? errors["account.business_category"].message : ""}
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
            <option value="Restaurants">Restaurants</option>
            <option value="Construction">Construction</option>
            <option value="Retail">Retail</option>
            <option value="Wholesale">Wholesale</option>
            <option value="Professional Services">Professional Services</option>
            <option value="Transportation">Transportation</option>
            <option value="Technology">Technology</option>
            <option value="Medical/Dental">Medical/Dental</option>
            <option value="Others">Others</option>
          </TextField>
        </div>
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="account.type_of_product_services_sold"
            error={!!errors["account.type_of_product_services_sold"]}
            label="Type of Product / Service"
            helperText={errors["account.type_of_product_services_sold"] ? errors["account.type_of_product_services_sold"].message : ""}
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
            name="account.home_based"
            error={!!errors["account.home_based"]}
            label="Home-based Business?"
            helperText={errors["account.home_based"] ? errors["account.home_based"].message : ""}
            select
            inputRef={register({
              required: "This field is required"
            })}
            fullWidth
            autoComplete="off"
            margin="normal"
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
            name="account.business_start_date"
            label="Business Start Date"
            placeholder="02/2019"
            error={!!errors["account.business_start_date"]}
            helperText={errors["account.business_start_date"] && errors["account.business_start_date"].message}
            type="text"
            inputRef={register({
              required: "This field is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/?([0-9]{4})$/,
                message: "Invalid format ex) 02/2019"
              }
            })}
            fullWidth
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="account.num_of_employees"
            error={!!errors["account.num_of_employees"]}
            label="# of Employees"
            helperText={errors["account.num_of_employees"] ? errors["account.num_of_employees"].message : ""}
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
            <option value="Just me">Just me</option>
            <option value="2 to 5">2 to 5</option>
            <option value="6 to 10">6 to 10</option>
            <option value="11 to 25">11 to 25</option>
            <option value="26 or more">26 or more</option>
          </TextField>
        </div>
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="account.business_website_address"
            label="Business Website Address(optional)"
            inputRef={register({
              required: "This field is required"
            })}
            type="text"
            fullWidth
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="account.business_location_street"
            error={!!errors["account.business_location_street"]}
            label="Business Location Street"
            helperText={errors["account.business_location_street"] ? errors["account.business_location_street"].message : ""}
            type="text"
            inputRef={register({
              required: "This field is required"
            })}
            fullWidth
          />
        </div>
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="account.business_location_city"
            error={!!errors["account.business_location_city"]}
            label="Business Location City"
            inputRef={register({
              required: "This field is required"
            })}
            helperText={errors["account.business_location_city"] ? errors["account.business_location_city"].message : ""}
            type="text"
            fullWidth
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="account.business_location_state"
            error={!!errors["account.business_location_state"]}
            label="Business Location State"
            helperText={errors["account.business_location_state"] ? errors["account.business_location_state"].message : ""}
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
            name="account.business_location_zipcode"
            error={!!errors["account.business_location_zipcode"]}
            helperText={errors["account.business_location_zipcode"] ? errors["account.business_location_zipcode"].message : ""}
            rules={{ required: "This field is required" }}
            register={register}
            setValue={setValue}
            as={
              <NumberFormat
                label="Business Location Zip Code"
                type="tel"
                fullWidth
                autoComplete="off"
                margin="normal"
                isNumericString
                customInput={TextField}
                isAllowed={value => {
                  if (value.formattedValue.length > 5) {
                    return false;
                  }
                  return true;
                }}
              />
            }
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="account.rent_or_own"
            error={!!errors["account.rent_or_own"]}
            label="Rent Or Own?"
            helperText={errors["account.rent_or_own"] ? errors["account.rent_or_own"].message : ""}
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
            <option value="Rent/Lease">Rent/Lease</option>
            <option value="Own">Own</option>
          </TextField>
        </div>
        <div className="px-2 lg:w-1/2 w-full py-4">
          <RHFInput
            mode="onChange"
            name="account.monthly_rent_mortgage_payment"
            error={!!errors["account.monthly_rent_mortgage_payment"]}
            helperText={errors["account.monthly_rent_mortgage_payment"] ? errors["account.monthly_rent_mortgage_payment"].message : ""}
            as={
              <NumberFormat
                label="Monthly Rent/Mortgage Payment"
                type="tel"
                fullWidth
                autoComplete="off"
                margin="normal"
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
            }
            register={register}
            setValue={setValue}
            rules={{ required: "This field is required" }}
          />
        </div>
      </div>
    </div>
  );
}
