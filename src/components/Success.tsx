import * as React from "react";
import Header from "./Header";
import Layout from "../shared/Layout";

const Success: React.FC<{}> = () => (
  <React.Fragment>
    <Layout>
      <Header />
      <div className="success-page text-white">
        <div className="container-c mx-auto m-24 flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <div className="my-8">
              <img src={require("../images/green-check.svg")} className="h-16" alt="checkmark icon" />
            </div>
            <div className="text-center" style={{ color: "#000000" }}>
              <p className="font-sansBold lg:text-lg text-sm">Thank you</p>
              <p className="font-sansBold lg:text-lg text-sm lg:px-0 px-10">
                Your application is successfully submitted. We will contact you very soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </React.Fragment>
);

export default Success;
