import React from "react";
import Header from './Header';
import Layout from "../shared/Layout";

class Success extends React.Component {
  state = {
    from: null
  };

  render() {
    return (
      <React.Fragment>
          <Header />
        <Layout>
          <div className="success-page text-white">
            <div className="container mx-auto m-24 flex justify-center">
              <div className="flex flex-col justify-center items-center">
                <div className="my-8">
                  <img src={require('../images/green-check.svg')} className="h-16" />
                </div>
                <div className="text-center" style={{color: "#000000"}}>
                  <p className="font-sansBold lg:text-lg text-sm">Thank you</p>
                  <p className="font-sansBold lg:text-lg text-sm lg:px-0 px-10">Your application is successfully submitted. We will contact you very soon!</p>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Success;
