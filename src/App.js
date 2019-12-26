import React, { useEffect } from "react";
import useForm, { FormContext } from "react-hook-form";
import Layout from "./shared/Layout";
import Header from "./components/Header";
import Form from "./components/Form.js";
import UploadDocument from "./components/UploadDocument";
import SignatureSection from "./components/SignatureSection";
import publicIp from "public-ip";
import axios from "axios";
import queryString from "query-string";

import { generateSignature } from "./utils";

const App = () => {
  const methods = useForm();
  const [state, setState] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const [signature, setSignature] = React.useState();
  const [qs, setQueryString] = React.useState();

  const url = window.location.href;
  const parsedURL = queryString.parseUrl(url);

  if (parsedURL.query) {
    setQueryString({
      type: parsedURL.query.recType,
      external_id: parsedURL.query.id,
      imgURL: parsedURL.query.imgURL
    });
  }

  console.log(qs);

  const onSubmit = data => {
    window.scrollTo(0, 0);

    setIsLoading(true);
    const state = {
      ...data,
      signature: [...signature],
      files: [...files],
      ...qs,
      folder_id: ""
    };

    publicIp.v4().then(ip => {
      setState({
        ...state,
        client_ip: ip
      });
    });
  };
  useEffect(() => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    if (isLoading) {
      axios.post("https://middle.brightpointcapital.net/api/v3/form", state, axiosConfig).then(res => {
        console.log(res);

        if (res.data.statusCode === 200) {
          setIsLoading(false);
        }
      });
    }
  }, [state]);

  function generateSig(e) {
    console.log(e.target);
    const element = e.target;
    const canvas = generateSignature(element, "Yeondam Pakr");
    const signatureBase64 = canvas.toDataURL().split(",");
    const sigArr = [];
    sigArr.push(signatureBase64[0]);
    sigArr.push(signatureBase64[1]);
    setSignature(sigArr);
  }

  function onFileDrop(file) {
    for (let i = 0; i < file.length; i++) {
      const reader = new FileReader();
      reader.onload = e => {
        const newFiles = [...files];
        let newFileObj = {
          base64: reader.result,
          filename: file[i].name,
          type: file[i].type,
          size: file[i].size
        };

        newFiles.push(newFileObj);
        setFiles(newFiles);
      };

      reader.onerror = e => {
        console.log("error!");
        return;
      };

      reader.readAsDataURL(file[i]);
    }
  }

  return (
    <Layout>
      {isLoading && (
        <div className="loading--apply_v2">
          <div className="spinner">
            <div className="spinner-a" />
            <div className="spinner-b" />
          </div>
        </div>
      )}
      <Header />
      <FormContext {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Form onSubmit={onSubmit} />
          <div className="container mx-auto bg-white shadow p-5 mt-8 bg-white shadow">
            <UploadDocument files={files} onDrop={onFileDrop} />
            <SignatureSection files={files} generateSig={generateSig} />
            <button className="btn btn-primary btn-pg" type="submit">
              Submit & Finish
            </button>
          </div>
        </form>
      </FormContext>
    </Layout>
  );
};

export default App;
