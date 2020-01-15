import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
//import NumberFormat from "react-number-format";
import { FastField } from "formik";

export default function FinancialInformation({ errors, values, touched }) {
  return (
    <div>
      <div>
        <h2 className="text-xl pl-1 pt-10 text-center py-4 capitalize">Financial Information</h2>
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.avg_monthly_revenue" label="Avg. Monthly Gross Sales">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  label="Avg. Monthly Gross Sales"
                  select
                  fullWidth
                  autoComplete="off"
                  variant="filled"
                >
                  <MenuItem value="$10,000">$10,000</MenuItem>
                  <MenuItem value="$15,000">$15,000</MenuItem>
                  <MenuItem value="$20,000">$20,000</MenuItem>
                  <MenuItem value="$25,000">$25,000</MenuItem>
                  <MenuItem value="$30,000">$30,000</MenuItem>
                  <MenuItem value="$40,000">$40,000</MenuItem>
                  <MenuItem value="$50,000">$50,000</MenuItem>
                  <MenuItem value="$75,000">$75,000</MenuItem>
                  <MenuItem value="$100,000">$100,000</MenuItem>
                  <MenuItem value="$125,000">$125,000</MenuItem>
                  <MenuItem value="$150,000">$150,000</MenuItem>
                  <MenuItem value="$200,000">$200,000</MenuItem>
                  <MenuItem value="$250,000">$250,000</MenuItem>
                  <MenuItem value="$300,000">$300,000</MenuItem>
                  <MenuItem value="$350,000">$350,000</MenuItem>
                  <MenuItem value="$400,000">$400,000</MenuItem>
                  <MenuItem value="$450,000">$450,000</MenuItem>
                  <MenuItem value="$500,000+">$500,000+</MenuItem>
                </TextField>
              );
            }}
          </FastField>
        </div>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.daily_balance_range" label="Avg. Daily Balance">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  label="Avg. Daily Balance"
                  select
                  fullWidth
                  autoComplete="off"
                  variant="filled"
                >
                  <MenuItem value="< $1k">&lt; $1k</MenuItem>
                  <MenuItem value="$1k - $3k">$1,000 - $3,000</MenuItem>
                  <MenuItem value="$3k - $5k">$3,000 - $5,000</MenuItem>
                  <MenuItem value="$5k - $7k">$5,000 - $7,000</MenuItem>
                  <MenuItem value="$7k - $10k">$7,000 - $10,000</MenuItem>
                  <MenuItem value="$10k - $20k">$10,000 - $20,000</MenuItem>
                  <MenuItem value="$20k - $50k">$20,000 - $50,000</MenuItem>
                  <MenuItem value="$50k">$50,000 &lt;</MenuItem>
                </TextField>
              );
            }}
          </FastField>
        </div>
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.cc_sales_ratio" label="% of Credit Card Sales">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  label="% of Credit Card Sales"
                  select
                  fullWidth
                  autoComplete="off"
                  variant="filled"
                >
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="less than 25%">less than 25%</MenuItem>
                  <MenuItem value="25 - 50%">25 - 50%</MenuItem>
                  <MenuItem value="50% or more">50% or more</MenuItem>
                </TextField>
              );
            }}
          </FastField>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/3 w-full py-4">
          <FastField name="opp.filed_previous_taxreturn" label="Have tax return for previous year?">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  label="Have tax return for previous year?"
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
          <FastField name="opp.has_online_banking" label="Use online banking?">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  label="Use online banking?"
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
          <FastField name="opp.loan_history" label="Your business loan history">
            {({ field, form, meta }) => {
              return (
                <TextField
                  {...field}
                  error={meta.touched && !meta.value}
                  helperText={meta.touched && !meta.value ? "This field is required" : ""}
                  label="Your business loan history"
                  select
                  fullWidth
                  autoComplete="off"
                  variant="filled"
                >
                  <MenuItem value="First time applying">First time applying</MenuItem>
                  <MenuItem value="Had loan(s) and paid off">Had loan(s) and paid off</MenuItem>
                  <MenuItem value="Have 1 open loan">Have 1 open loan</MenuItem>
                  <MenuItem value="Have more than 1 open loan">Have more than 1 open loan</MenuItem>
                </TextField>
              );
            }}
          </FastField>
        </div>
      </div>
    </div>
  );
}
