import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex flex-start w-full h-20 bg-white">
        <img
          className="p-5 w-2/4 lg:w-2/12"
          src="https://brightpoint.net/static/media/brightpoint.70bab5b3.svg"
          alt="BrightPoint Capital Logo"
        />
      </div>
      <div className="w-full bg-blue-900 py-2">
        <div className="flex justify-center w-full lg:w-1/2 mx-auto text-white">
          <p className="mr-2">Questions?</p>
          <p className="mx-1">(888) 567-8912</p>
          <p className="ml-2">M-F 7a-4p PST</p>
        </div>
      </div>
      <div className="w-full shadow py-2 bg-white">
        <div className="flex justify-center w-full lg:w-1/2 mx-auto text-gray-700 text-lg lg:text-2xl font-light">
          <p className="mr-2">Complete your application</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
