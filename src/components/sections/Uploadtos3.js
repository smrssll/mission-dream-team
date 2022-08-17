import React, { useState } from "react";
import AWS from "aws-sdk";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const S3_BUCKET = "YOUR_BUCKET_NAME_HERE";
const REGION = "YOUR_DESIRED_REGION_HERE";

AWS.config.update({
  accessKeyId: "YOUR_ACCESS_KEY_HERE",
  secretAccessKey: "YOUR_SECRET_ACCESS_KEY_HERE",
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const UploadImageToS3 = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = (file) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };

  return (
    <>
      <div className="reveal-from-bottom" data-reveal-delay="600">
        <ButtonGroup>
          <form>
            <input onChange={handleFileInput} type="file" name="image" />
            <Button
              onClick={() => uploadFile(selectedFile)}
              color="primary"
              type="submit"
            >
              Upload
            </Button>
          </form>
        </ButtonGroup>
      </div>
      <div
        className="container-xs reveal-from-bottom container_hello"
        data-reveal-delay="700"
      >
        <h1>{progress}</h1>
      </div>
    </>
  );
};

export default UploadImageToS3;
