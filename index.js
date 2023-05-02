const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const chefsInfo = require("./data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("data is running");
});

app.get("/allData", (req, res) => {
  res.send(chefsInfo);
});

app.listen(port, () => {
  console.log(`data api is running on port: ${port}`);
});
