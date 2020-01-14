import React from "react";
import "jsignature/libs/jSignature.min.js";

class SignaturePad extends React.Component {
  owner_one_signature = React.createRef();

  componentDidMount() {
    window.scrollTo(0, 0);
    const $ = window.$;
    const self = this;
    const sign_pad_1 = $(`#${this.props.signatureId}`).jSignature({ UndoButton: true });
    sign_pad_1
      .bind("change", function(e) {
        $(".sign-label").hide();
        var datapair1 = sign_pad_1.jSignature("getData", "image");
        self.props.getSignature(datapair1);
      })
      .bind(this);
  }

  render() {
    const { values } = this.props;
    return (
      <div className="w-1/2 px-4 ">
        <p className="text-lg font-medium">Draw your signature here</p>
        <div
          ref={this.owner_one_signature}
          id={this.props.signatureId}
          className="signature relative mr-4 border-b-2 border-gray-600 bg-white"
        ></div>
        {values.contact[this.props.index].first_name &&
          values.contact[this.props.index].last_name &&
          values.contact[this.props.index].title && (
            <div className="owner-info d-flex flex-column align-items-start ml-1 text-lg">
              {values.contact[this.props.index].first_name} {values.contact[this.props.index].last_name},{" "}
              {values.contact[this.props.index].title}
            </div>
          )}
      </div>
    );
  }
}

export default SignaturePad;
