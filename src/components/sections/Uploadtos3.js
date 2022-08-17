import React, { useState } from "react";
import S3 from "react-aws-s3";
import S3FileUpload from "react-s3";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
require("dotenv").config();

// window.Buffer = window.Buffer || require("buffer").Buffer;

const UploadImageToS3 = () => {
  // const [selectedFile, setSelectedFile] = useState(null);

  // // the configuration information is fetched from the .env file
  const config = {
    bucketName: "custom-labels-console-us-east-1-ffb54cee8e",
    region: "us-east-1",
    accessKeyId: "AKIA3IDSONMNPVNE4KGA",
    secretAccessKey: "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",
  };

  // const handleFileInput = (e) => {
  //   setSelectedFile(e.target.files[0]);
  // };

  // const uploadFile = async (file) => {
  //   const ReactS3Client = new S3(config);
  //   // the name of the file uploaded is used to upload it to S3
  //   ReactS3Client.uploadFile(file, file.name)
  //     .then((data) => console.log(data.location))
  //     .catch((err) => console.error(err));
  // };

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
          {/* <form> */}
          <input onChange={upload} type="file" />
          <Button
            onClick={() => upload()}
            color="primary"
            // type="submit"
          >
            Upload
          </Button>
          {/* </form> */}
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
