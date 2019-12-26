import React from "react";
import { TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { useFormContext } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";

export default function FinancialInformation() {
  const { register, errors, setValue } = useFormContext();

  return (
    <div>
      <h2 className="text-3xl pl-1 pt-10">Financial Information</h2>

      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/2 w-full py-4">
          <RHFInput
            mode="onChange"
            as={
              <NumberFormat
                label="How much money do you need?"
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
            name="opp.amount_requested_exact"
            error={!!errors["opp.amount_requested_exact"]}
            helperText={errors["opp.amount_requested_exact"] ? errors["opp.amount_requested_exact"].message : ""}
            register={register}
            setValue={setValue}
            rules={{ required: "This field is required" }}
          />
        </div>
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="opp.important_factor"
            error={!!errors["opp.important_factor"]}
            label="What's most important to you?"
            helperText={errors["opp.important_factor"] ? errors["opp.important_factor"].message : ""}
            select
            inputRef={register({
              required: true
            })}
            fullWidth
            autoComplete="off"
            margin="normal"
            SelectProps={{
              native: true
            }}
          >
            <option value="" />
            <option value="Amount of funds">Amount of funds</option>
            <option value="Speed of funds">Speed of funds</option>
            <option value="Cost of funds">Cost of funds</option>
          </TextField>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="opp.how_fast"
            error={!!errors["opp.how_fast"]}
            label="What's most important to you?"
            helperText={errors["opp.how_fast"] ? errors["opp.how_fast"].message : ""}
            select
            inputRef={register({
              required: true
            })}
            fullWidth
            autoComplete="off"
            margin="normal"
            SelectProps={{
              native: true
            }}
          >
            <option value="" />
            <option value="Immediately">Immediately</option>
            <option value="2 - 4 weeks">2 - 4 weeks</option>
            <option value="Not in hurry">Not in hurry</option>
          </TextField>
        </div>
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="opp.collateral_option"
            error={!!errors["opp.collateral_option"]}
            label="Do you have any real estate to put as a collateral?"
            helperText={errors["opp.collateral_option"] ? errors["opp.collateral_option"].message : ""}
            select
            inputRef={register({
              required: true
            })}
            fullWidth
            autoComplete="off"
            margin="normal"
            SelectProps={{
              native: true
            }}
          >
            <option value="" />
            <option value="No, I don't have a real estate">No, I don't have a real estate</option>
            <option value="Yes, but I do not want to use for collateral">Yes, but I do not want to use for collateral</option>
            <option value="Yes, I have real estate to use for collateral">Yes, I have real estate to use for collateral</option>
          </TextField>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="opp.avg_monthly_revenue"
            error={!!errors["opp.avg_monthly_revenue"]}
            label="What's your average monthly revenue"
            helperText={errors["opp.avg_monthly_revenue"] ? errors["opp.avg_monthly_revenue"].message : ""}
            select
            inputRef={register({
              required: true
            })}
            fullWidth
            autoComplete="off"
            margin="normal"
            SelectProps={{
              native: true
            }}
          >
            <option value="" />
            <option value="$10,000">$10,000</option>
            <option value="$15,000">$15,000</option>
            <option value="$20,000">$20,000</option>
            <option value="$25,000">$25,000</option>
            <option value="$30,000">$30,000</option>
            <option value="$40,000">$40,000</option>
            <option value="$50,000">$50,000</option>
            <option value="$75,000">$75,000</option>
            <option value="$100,000">$100,000</option>
            <option value="$125,000">$125,000</option>
            <option value="$150,000">$150,000</option>
            <option value="$200,000">$200,000</option>
            <option value="$250,000">$250,000</option>
            <option value="$300,000">$300,000</option>
            <option value="$350,000">$350,000</option>
            <option value="$400,000">$400,000</option>
            <option value="$450,000">$450,000</option>
            <option value="$500,000+">$500,000+</option>
          </TextField>
        </div>
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="opp.cc_sales_ratio"
            error={!!errors["opp.cc_sales_ratio"]}
            label="What's hte % of credit card sales?"
            helperText={errors["opp.cc_sales_ratio"] ? errors["opp.cc_sales_ratio"].message : ""}
            select
            inputRef={register({
              required: true
            })}
            fullWidth
            autoComplete="off"
            margin="normal"
            SelectProps={{
              native: true
            }}
          >
            <option value="" />
            <option value="None">None</option>
            <option value="less than 25%">less than 25%</option>
            <option value="25 - 50%">25 - 50%</option>
            <option value="50% or more">50% or more</option>
          </TextField>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="opp.daily_balance_range"
            error={!!errors["opp.daily_balance_range"]}
            label="What's your average daily balance?"
            helperText={errors["opp.daily_balance_range"] ? errors["opp.daily_balance_range"].message : ""}
            select
            inputRef={register({
              required: true
            })}
            fullWidth
            autoComplete="off"
            margin="normal"
            SelectProps={{
              native: true
            }}
          >
            <option value=""></option>
            <option value="< $1k">&lt; $1k</option>
            <option value="$1k - $3k">$1,000 - $3,000</option>
            <option value="$3k - $5k">$3,000 - $5,000</option>
            <option value="$5k - $7k">$5,000 - $7,000</option>
            <option value="$7k - $10k">$7,000 - $10,000</option>
            <option value="$10k - $20k">$10,000 - $20,000</option>
            <option value="$20k - $50k">$20,000 - $50,000</option>
            <option value="$50k">$50,000 &lt;</option>
          </TextField>
        </div>
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="opp.filed_previous_taxreturn"
            error={!!errors["opp.filed_previous_taxreturn"]}
            label="Did you file a tax return for previous year?"
            helperText={errors["opp.filed_previous_taxreturn"] ? errors["opp.filed_previous_taxreturn"].message : ""}
            select
            inputRef={register({
              required: true
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
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="px-2 lg:w-1/2 w-full py-4">
          <TextField
            name="opp.has_online_banking"
            error={!!errors["opp.has_online_banking"]}
            label="Do you use online banking for business checking?"
            helperText={errors["opp.has_online_banking"] ? errors["opp.has_online_banking"].message : ""}
            select
            inputRef={register({
              required: true
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
            name="opp.loan_history"
            error={!!errors["opp.loan_history"]}
            label="Tell us about your loan history?"
            helperText={errors["opp.loan_history"] ? errors["opp.loan_history"].message : ""}
            select
            inputRef={register({
              required: true
            })}
            fullWidth
            autoComplete="off"
            margin="normal"
            SelectProps={{
              native: true
            }}
          >
            <option value="" />
            <option value="First time applying">First time applying</option>
            <option value="Had loan(s) and paid off">Had loan(s) and paid off</option>
            <option value="Have 1 open loan">Have 1 open loan</option>
            <option value="Have more than 1 open loan">Have more than 1 open loan</option>
          </TextField>
        </div>
      </div>
    </div>
  );
}
