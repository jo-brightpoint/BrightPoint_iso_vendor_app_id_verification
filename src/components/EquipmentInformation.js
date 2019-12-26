import React from "react";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import { useFormContext } from "react-hook-form";
import { formatPhoneNumber } from "../utils";
import { RHFInput } from "react-hook-form-input";

export default function EquipmentInformation({ isEquipment }) {
  const { register, errors, setValue } = useFormContext();

  return (
    isEquipment && (
      <div>
        <h2 className="text-3xl pl-1 pt-10">Equipment Information(Equipment Financing Only)</h2>
        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/2 w-full py-4">
            <TextField
              name="opp.vendor_name"
              error={!!errors["opp.vendor_name"] && isEquipment}
              label="Vendor Name"
              helperText={errors["opp.vendor_name"] && isEquipment ? errors["opp.vendor_name"].message : ""}
              type="text"
              inputRef={register({
                required: true
              })}
              fullWidth
            />
          </div>
          <div className="px-2 lg:w-1/2 w-full py-4">
            <TextField
              name="opp.vendor_website"
              label="Vendor Website(optional)"
              inputRef={register({
                required: true
              })}
              type="text"
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
                  label="Vendor Phone"
                  type="tel"
                  fullWidth
                  autoComplete="off"
                  margin="normal"
                  isNumericString
                  customInput={TextField}
                  format={formatPhoneNumber}
                />
              }
              name="opp.vendor_phone"
              error={!!errors["opp.vendor_phone"] && isEquipment}
              helperText={errors["opp.vendor_phone"] && isEquipment ? errors["opp.vendor_phone"].message : ""}
              register={register}
              setValue={setValue}
              rules={{ required: "This field is required" }}
            />
          </div>
          <div className="px-2 lg:w-1/2 w-full py-4">
            <TextField
              name="opp.vendor_email"
              error={!!errors["opp.vendor_email"] && isEquipment}
              label="Vendor Email"
              inputRef={register({
                required: true
              })}
              helperText={errors["opp.vendor_email"] && isEquipment ? errors["opp.vendor_email"].message : ""}
              type="text"
              fullWidth
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/2 w-full py-4">
            <TextField
              name="opp.vendor_street"
              error={!!errors["opp.vendor_street"] && isEquipment}
              label="Street Address"
              helperText={errors["opp.vendor_street"] && isEquipment ? errors["opp.vendor_street"].message : ""}
              type="text"
              inputRef={register({
                required: true
              })}
              fullWidth
            />
          </div>
          <div className="px-2 lg:w-1/2 w-full py-4">
            <TextField
              name="opp.vendor_city"
              error={!!errors["opp.vendor_city"] && isEquipment}
              label="City"
              inputRef={register({
                required: true
              })}
              helperText={errors["opp.vendor_city"] && isEquipment ? errors["opp.vendor_city"].message : ""}
              type="text"
              fullWidth
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/2 w-full py-4">
            <TextField
              name="opp.vendor_state"
              error={!!errors["opp.vendor_state"] && isEquipment}
              label="State"
              helperText={errors["opp.vendor_state"] && isEquipment ? errors["opp.vendor_state"].message : ""}
              inputRef={register({
                required: true
              })}
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
          <div className="px-2 lg:w-1/2 w-full py-4">
            <RHFInput
              mode="onChange"
              as={
                <NumberFormat
                  label="Zip Code"
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
              name="opp.vendor_zip"
              error={!!errors["opp.vendor_zip"] && isEquipment}
              helperText={errors["opp.vendor_zip"] && isEquipment ? errors["opp.vendor_zip"].message : ""}
              register={register}
              setValue={setValue}
              rules={{ required: "This field is required" }}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/2 w-full py-4">
            <TextField
              name="opp.equipment_condition"
              error={!!errors["opp.equipment_condition"] && isEquipment}
              label="Equipment Condition"
              helperText={errors["opp.equipment_condition"] && isEquipment ? errors["opp.equipment_condition"].message : ""}
              select
              inputRef={register({
                required: true
              })}
              fullWidth
              SelectProps={{
                native: true
              }}
            >
              <option value="" />
              <option value="New">New</option>
              <option value="Used">Used</option>
            </TextField>
          </div>
          <div className="px-2 lg:w-1/2 w-full py-4">
            <RHFInput
              mode="onChange"
              as={
                <NumberFormat
                  label="Equipment Cost"
                  type="tel"
                  fullWidth
                  autoComplete="off"
                  margin="normal"
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
              }
              rules={{ required: "This field is required" }}
              name="opp.equipment_cost"
              error={!!errors["opp.equipment_cost"] && isEquipment}
              helperText={errors["opp.equipment_cost"] && isEquipment ? errors["opp.equipment_cost"].message : ""}
              register={register}
              setValue={setValue}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="px-2 w-full py-4">
            <TextField
              name="opp.equipment_description"
              error={!!errors["opp.equipment_description"] && isEquipment}
              label="Equipment Description"
              helperText={errors["opp.equipment_description"] && isEquipment ? errors["opp.equipment_description"].message : ""}
              type="text"
              inputRef={register({
                required: true
              })}
              fullWidth
              SelectProps={{
                native: true
              }}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="px-2 lg:w-1/2 w-full py-4">
            <TextField
              name="opp.equipment_desired_term"
              error={!!errors["opp.equipment_desired_term"] && isEquipment}
              label="Desired Term"
              helperText={errors["opp.equipment_desired_term"] && isEquipment ? errors["opp.equipment_desired_term"].message : ""}
              select
              inputRef={register({
                required: true
              })}
              fullWidth
              SelectProps={{
                native: true
              }}
            >
              <option value="" />
              <option value="24">24 months</option>
              <option value="36">36 months</option>
              <option value="48">48 months</option>
              <option value="60">60 months</option>
            </TextField>
          </div>
          <div className="px-2 lg:w-1/2 w-full py-4">
            <TextField
              name="opp.equipment_purchase_option"
              error={!!errors["opp.equipment_purchase_option"] && isEquipment}
              label="Purchase Option"
              inputRef={register({
                required: true
              })}
              helperText={errors["opp.equipment_purchase_option"] && isEquipment ? errors["opp.equipment_purchase_option"].message : ""}
              select
              fullWidth
              SelectProps={{
                native: true
              }}
            >
              <option value="" />
              <option value="$1 Lease Buyout">$1 Lease Buyout</option>
              <option value="Equipment Finance Agreement">Equipment Finance Agreement</option>
              <option value="Fair Market Value">Fair Market Value</option>
              <option value="I'm not sure">I'm not sure</option>
            </TextField>
          </div>
        </div>
      </div>
    )
  );
}
