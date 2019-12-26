import React from "react";
import Dropzone from "react-dropzone";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const UploadDocument = ({ files, onDrop, removeFile }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className="upload-container">
      <h2 className="text-center text-2xl pb-5">Upload your documents</h2>

      <div className="row">
        <div className="col-md-12">
          <Dropzone onDrop={onDrop} multiple={true} maxSize={26214400}>
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  className="relative bg-gray-100 flex justify-center items-center flex-col mx-10 mb-10"
                  style={{ height: "300px" }}
                >
                  <i className="fal fa-cloud-upload fa-2x" />
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <div className="dragActive">
                      <i className="fal fa-sync fa-3x fa-spin" />
                    </div>
                  ) : (
                    <p>Drag &amp; Drop File here</p>
                  )}
                </div>
              );
            }}
          </Dropzone>
        </div>
        <div className="flex px-">
          <ul className="">
            <li className="mb-3">
              <div className="flex flex-start">
                <i className="fas fa-check text-blue-700" />
                <h5 className="pl-2 hours m-0">Driver's license(s) of all owners</h5>
              </div>
            </li>
            <li className="mb-3">
              <div className="flex flex-start">
                <i className="fas fa-check text-blue-700" />
                <h5 className="pl-2 hours m-0">Bank statements for past 3 months</h5>
              </div>
            </li>
            <li className="mb-3">
              <div className="flex flex-start">
                <i className="fas fa-check text-blue-700" />
                <h5 className="pl-2 hours m-0">Void check of business account</h5>
              </div>
            </li>
            <li className="mb-3 d-flex">
              <FormControlLabel
                control={
                  <Checkbox name="provide_later_documents" checked={isChecked} onChange={() => setIsChecked(!isChecked)} color="primary" />
                }
                label="I will provide later by email"
              />
            </li>
          </ul>
        </div>
      </div>
      {files && files.length > 0 && <hr />}
      <div className="row">
        {files && files.length > 0 && (
          <div className="col-12 py-sm">
            <h4>My uploaded documents</h4>
          </div>
        )}
        {files &&
          files.map((file, index) => (
            <div className="col-md-12 file--container py-sm px-3" key={index}>
              <p>{file.filename}</p>
              <span className="ml-md p-sm" onClick={() => removeFile(file.filename)}>
                <i className="fal fa-trash-alt fa-lg" />
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UploadDocument;
