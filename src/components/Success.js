import React from "react";

class Success extends React.Component {
  state = {
    from: null
  };

  render() {
    return (
      <React.Fragment>
        <div className="success-page h-100vh text-white" style={{ backgroundColor: "#2a3f54" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 mx-auto d-flex justify-content-center align-items-center flex-column h-100vh">
                <div className="content-area text-center">
                  <img
                    className="py-lg-md"
                    width="320"
                    src="https://image.brightpoint.net/bp-white-logo.png"
                    alt="BrightPoint Capital Inc."
                  />
                  <div className="text-container pb-lg-lg">
                    <h3 className="py-sm text-white arial-nova m-0">Your application is successfully submitted.</h3>
                    <i className="fal fa-check-circle fa-7x checkmark" style={{ color: "#fff" }} />
                    {this.state.from && this.state.from === "application" && (
                      <p className="py-sm display-4 arial-nova m-0">Now check your email</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Success;
