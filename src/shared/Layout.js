import React from "react";
// import Helmet from "react-helmet";

const Layout = ({ children }) => {
  return (
    <div className="bg-white font-sans pb-20">
      {/* <Helmet>
        <html lang="en" />
        <title>BrightPoint Capital | Application</title>
      </Helmet> */}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
