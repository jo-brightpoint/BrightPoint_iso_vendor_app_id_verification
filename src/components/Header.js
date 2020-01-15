import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-bpc-navy">
      <div className="container-c mx-auto">
        <div className="w-full flex justify-around items-center">
          <div className="w-full">
            <img className="py-5" src={require("../images/BrightPoint-logo.svg")} alt="BrightPoint Capital Logo" />
          </div>
          <div className="w-2/3 flex justify-between items-center">
            <div className="flex justify-end w-full items-center">
              <img className="py-5" src={require("../images/Comodo-SSL.svg")} alt="Comodo Seal" />
              <p className="text-white pl-4">Support (888) 567-8912</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
