const express = require("express");
const cors = require("cors");
const DiscoveryV1 = require("ibm-watson/discovery/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/ask/:question", (req, res) => {
  let Questions = req.params.question;

  const discovery = new DiscoveryV1({
    version: "2019-04-30",
    authenticator: new IamAuthenticator({
      apikey: "h2TIFEfGXs8sQ3l1rKR-2o92TCLMFWhdXZHSVkkY9AsP",
    }),
    serviceUrl:
      "https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/fcbd0dc2-e32a-4103-9508-5ace87c04edb",
  });

  const questionParams = {
    environmentId: "61b48e34-b37c-493f-b03d-cc6e58a1a291",
    collectionId: "1abacf48-4811-4b64-9e04-4e3a9ea9b027",
    query: Questions,
    highlight: true,
  };

  console.log("query point hit");
  discovery
    .query(questionParams)
    .then((questionResponse) => {
      console.log(JSON.stringify(questionResponse, null, 2));
      res.send(JSON.stringify(questionResponse, null, 2));
    })
    .catch((err) => {
      console.log("error:", err);
    });
});

app.listen("4001", () => {
  console.log("Server running on port 4001");
});
