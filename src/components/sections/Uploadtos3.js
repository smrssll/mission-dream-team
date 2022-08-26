import React, { useState } from "react";
import S3FileUpload from "react-s3";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import secrets from "./secrets"
import { RekognitionClient, DetectCustomLabelsCommand } from "@aws-sdk/client-rekognition";


const client = new RekognitionClient({ 
  region: "us-east-1",
  credentials: {
    accessKeyId: secrets.accessKeyId,
    secretAccessKey: secrets.secretAccessKey,
  }
});


const UploadImageToS3 = () => {
  const [text, setText] = useState('Rekognition flower name  will display here');
  const [text2, setText2] = useState('Rekognition leaves/no leaves will display here');
  const config = secrets;

  const upload = (e) => {
    const filename = e.target.files[0]
    const name = filename.name
    console.log("filename: ", filename, name)
    S3FileUpload.uploadFile(filename, config)
      .then((data) => {
        console.log(data.location);
        console.log("upload resp: ", data);
        const command = new DetectCustomLabelsCommand({
          "Image": {
            "S3Object": {
              "Bucket": secrets.bucketName,
              "Name": name
              }
          },
          MaxResults: 100,
          ProjectVersionArn: "arn:aws:rekognition:us-east-1:773334133530:project/flowers_1/version/flowers_1.2022-08-18T14.49.32/1660790972291"
        });
        client.send(command).then(
          (data) => {
            setText(`flower: ${data.CustomLabels[0].Name}`)
            setText2(`leaves: ${data.CustomLabels[1].Name}`)
          console.log(data, "data")
          console.log(data.CustomLabels[0].Name, "response 1")
          console.log(data.CustomLabels[1].Name, "response 2")
          },
          (error) => {
          console.log(error, "Error")
          }
        );
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
      <br></br>
      <h4>
        {text}
      </h4>
      <h4>
        {text2}
      </h4>
      <div
        className="container-xs reveal-from-bottom container_hello"
        data-reveal-delay="700"
      ></div>
    </>
  );
};

export default UploadImageToS3;
