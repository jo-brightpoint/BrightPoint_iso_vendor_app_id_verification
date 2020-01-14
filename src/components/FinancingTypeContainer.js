import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { FastField } from "formik";

export default function FinancingTypeContainer({ setFieldValue, handleChange, handleBlur, values, errors, touched, onChange }) {

  return (
      <>
      <div className={`flex flex-wrap ${values.opp.type === 'Equipment Financing' ? '' : 'justify-around'} pt-4 pb-12`}>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.type" type="text" label="Which Financing Type?">
            {({ field, form: { touched, errors }, meta }) => {
              return (
                <TextField
                {...field}
                error={meta.touched && !meta.value}
                helperText={meta.touched && !meta.value ? "This field is required" : ""}
                label="Which Financing Type?"
                select
                variant="filled"
                fullWidth
              >
                <MenuItem value="Working Capital">Working Capital</MenuItem>
                <MenuItem value="Equipment Financing">Equipment Financing</MenuItem>
              </TextField>
              );
            }}
          </FastField>
        </div>
        {values && values.opp.type !== 'Equipment Financing' && (
            <>
            <div className="px-2 lg:w-1/3 w-full py-4">
                <FastField name="opp.amount_requested_exact" label="How much money do you need?">
                {({ field, form, meta }) => {
                    return (
                    <NumberFormat
                        {...field}
                        error={meta.touched && !meta.value}
                        helperText={meta.touched && !meta.value ? "This field is required" : ""}
                        label="How much money do you need?"
                        type="tel"
                        fullWidth
                        placeholder="e.g. $5,000"
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

          <div className="px-2 lg:w-1/3 w-full py-4">
            <FastField name="opp.important_factor" label="What's most important to you?">
              {({ field, form, meta }) => {
                return (
                  <TextField
                    {...field}
                    error={meta.touched && !meta.value}
                    helperText={meta.touched && !meta.value ? "This field is required" : ""}
                    label="What's most important to you?"
                    select
                    fullWidth
                    autoComplete="off"
                    variant="filled"
                  >
                    <MenuItem value="Amount of funds">Amount of funds</MenuItem>
                    <MenuItem value="Speed of funds">Speed of funds</MenuItem>
                    <MenuItem value="Cost of funds">Cost of funds</MenuItem>
                  </TextField>
                );
              }}
            </FastField>
          </div>
          </>
        )}
        
        
      </div>
        <hr className="h-2 w-full pt-8" />
      </>
  );
}
