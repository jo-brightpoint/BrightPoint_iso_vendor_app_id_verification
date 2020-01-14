import React from "react";
import Select from 'react-select';

function BPCSelect(props) {
  return (
    <>
      {props.hasLabel && (
        <label htmlFor={props.elemId} className="label">
          {props.label}
        </label>
      )}
      <div className="relative">
        <Select styles={{ control: base => ({ ...base, boxShadow: 0, padding: '10px 12px 10px', boderRadius: '0.124rem' }) }} options={[{value:'Working Capital', label: 'Working Capital'}, {value: 'Equipment Financing', label: 'Equipment Financing'}]} />
      </div>
    </>
  );
}

export default BPCSelect;
