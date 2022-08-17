import React, { useState } from "react";
import S3 from "react-aws-s3";
import S3FileUpload from "react-s3";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
require("dotenv").config();

// window.Buffer = window.Buffer || require("buffer").Buffer;

const UploadImageToS3 = () => {
  // // the configuration information is fetched from the .env file
  const config = {
    bucketName: "custom-labels-console-us-east-1-ffb54cee8e",
    region: "us-east-1",
    accessKeyId: "AKIA3IDSONMNF5ESXV5P",
    secretAccessKey: "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",
  };

  const upload = (e) => {
    S3FileUpload.uploadFile(e.target.files[0], config)
      .then((data) => {
        console.log(data.location);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <div className="reveal-from-bottom" data-reveal-delay="600">
        <ButtonGroup>
          <input onChange={upload} type="file" />
          <Button onClick={() => upload()} color="primary">
            Upload
          </Button>
        </ButtonGroup>
      </div>
      <div
        className="container-xs reveal-from-bottom container_hello"
        data-reveal-delay="700"
      >
        <h1></h1>
      </div>
    </>
  );
};

export default UploadImageToS3;
