import React, { useState } from "react";

import BusinessInformation from "./BusinessInformation";
import OwnerInformation from "./OwnerInformation";
import FinancialInformation from "./FinancialInformation";
import EquipmentInformation from "./EquipmentInformation";

const Form = ({ onSubmit }) => {
  const [isEquipment, setIsEquipment] = useState(false);

  return (
    <div className="container mx-auto bg-white shadow p-10 mt-8">
      <BusinessInformation />
      <OwnerInformation />
      <FinancialInformation />
      <div>
        <span
          onClick={() => {
            setIsEquipment(!isEquipment);
          }}
          className="text-lg text-gray-700"
        >
          Equipment Financing?
        </span>
      </div>
      <EquipmentInformation isEquipment={isEquipment} />
    </div>
  );
};

export default Form;
