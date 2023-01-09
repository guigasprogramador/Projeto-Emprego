const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
