import React from "react";
import Dropzone from "react-dropzone";

const UploadDocument = ({ files, onDrop, removeFile }) => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-center text-xl py-8 text-center capitalize">Upload your documents</h2>

      <div className="flex">
        <div className="w-1/3">
          <p className="text-lg pb-2">Required Documents</p>
          <div className="px-4 pb-2">
            <ul className="list-disc">
              <li>
                <div className="flex flex-start">
                  <h5 className="hours m-0">Driver's license(s) of all owners</h5>
                </div>
              </li>
              <li>
                <div className="flex flex-start">
                  <h5 className="hours m-0">Bank statements for past 3 months</h5>
                </div>
              </li>
              <li>
                <div className="flex flex-start">
                  <h5 className="hours m-0">Void check of business account</h5>
                </div>
              </li>
            </ul>
          </div>
          <p>Allowed file formats:</p>
          <div>
            <span className="p-1 text-xs mr-1 rounded text-white bg-bpc-blue">PDF</span>
            <span className="p-1 text-xs mr-1 rounded text-white bg-bpc-blue">JPG</span>
            <span className="p-1 text-xs mr-1 rounded text-white bg-bpc-blue">GIF</span>
            <span className="p-1 text-xs mr-1 rounded text-white bg-bpc-blue">PNG</span>
          </div>
        </div>
        <div className="w-2/3">
          <Dropzone onDrop={onDrop} multiple={true} maxSize={26214400} accept="image/png, image/gif,image/pdf">
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
              return (
                <div
                  {...getRootProps()}
                  className={`relative flex justify-center items-center flex-col mb-10 bg-white border-2 ${
                    isDragReject ? "border-red-500" : "border-gray-500"
                  } border-dashed`}
                  style={{ height: "170px" }}
                >
                  <img className="w-24 h-24" src={require("../images/green-upload-symbol.svg")} alt="Upload Button" />
                  <input {...getInputProps()} />
                  {isDragActive && !isDragReject ? (
                    <div className="dragActive">
                      <i className="fal fa-sync fa-lg fa-spin" />
                    </div>
                  ) : isDragReject ? (
                    <div className="flex flex-col justify-center text-center">
                      <p className="text-lg text-red-500">File type not accepted</p>
                    </div>
                  ) : (
                    <p className="text-lg">Drag &amp; Drop File here</p>
                  )}
                </div>
              );
            }}
          </Dropzone>
          <div className="flex flex-col">
            {files &&
              files.map((file, index) => (
                <div className="flex items-center" key={index}>
                  <span className="pr-4">
                    <img src={require("../images/green-check.svg")} alt="Check Icon" />
                  </span>
                  <p>{file.filename}</p>
                  <span className="pl-4" onClick={() => removeFile(file.filename)}>
                    <img src={require("../images/grey-remove.svg")} alt="Remove Icon" />
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocument;
