import React from "react";
// import Helmet from "react-helmet";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200">
      {/* <Helmet>
        <html lang="en" />
        <title>BrightPoint Capital | Application</title>
      </Helmet> */}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
