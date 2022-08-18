import React, { useState } from "react";
import S3FileUpload from "react-s3";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import secrets from "./secrets";

const UploadImageToS3 = () => {
  const config = secrets;

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
      ></div>
    </>
  );
};

export default UploadImageToS3;
