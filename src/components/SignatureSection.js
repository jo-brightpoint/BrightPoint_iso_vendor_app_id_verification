import React from "react";
import { useFormContext } from "react-hook-form";

const SignatureSection = ({ files, generateSig }) => {
  return (
    <div className="agreement-container">
      <div className="agreement p-5">
        {files && files.length > 0 ? <hr /> : null}
        <p className="text-light agreement-content">
          By signing below, the Merchant, owners and/or principals (the “Applicant”) certify that Applicant is authorized to submit this
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
      <div className="row pl-5 pt-0">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8">
              <canvas className="signature" style={{ width: "200px", height: "100px" }} onClick={generateSig}></canvas>
              <div className="signature"></div>
            </div>
          </div>
        </div>
        <div className="owner-info pl-3 d-flex flex-column align-items-start ml-1"></div>
      </div>
    </div>
  );
};

export default SignatureSection;
