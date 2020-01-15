import React from "react";
import SignaturePad from "./SignaturePad";

class SignatureSection extends React.Component {
  render() {
    const { values, getSignature } = this.props;
    return (
      <div className="agreement-container pt-16">
        <div className="flex">
          <SignaturePad values={values} signatureId="signature_1" getSignature={getSignature} index={0} />
          {values.contact[1] && <SignaturePad values={values} signatureId="signature_2" getSignature={getSignature} index={1} />}
        </div>
        <div className="flex">
          <button
            className="flex ml-4 mt-8 mb-8 items-center justify-center bg-bpc-navy text-white rounded text-xl"
            style={{ width: "300px", height: "50px" }}
            type="submit"
          >
            Submit
          </button>
        </div>
        {/* <input
          className="flex ml-4 mt-8 mb-8 items-center justify-center py-4 px-8 bg-bpc-navy text-white rounded text-xl"
          type="submit"
          value="Submit"
          style={{ width: "300px", height: "50px" }}
        /> */}
        <p className="text-gray-500 mx-4 agreement-content">
          By signing above, the Merchant, owners and/or principals (the “Applicant”) certify that Applicant is authorized to submit this
          application and will immediately notify BrightPoint Capital Inc. (“BPC”) of any change in financial condition. All information and
          documents submitted to BPC are true and may be relied upon by BPC and each of its successors, designees, or third party lenders
          (“Assignees”) with whom BPC may share the application. Applicant authorizes BPC and all Assignees to request and review
          investigative/credit reports, including comprehensive credit histories or hard credit pulls, and any other information regarding
          the Applicant deemed necessary by BPC or Assignees to verify information provided. Applicant waives and releases any claims
          against BPC, all Assignees, for any act or omission relating to the release of information obtained in connection with this
          application. This authorization shall be valid for ninety (90) days unless revoked in writing by Applicant. The Applicant(s)
          understands that the application submitted electronically shall have the same force and effect as if the application bore an inked
          original signature(s).
        </p>
      </div>
    );
  }
}

export default SignatureSection;
