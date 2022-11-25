const path = require("path");
require("dotenv").config();

const express = require("express");
const app = express();

const { dirname } = require("path");

app.use(express.json());

// Req and Res logger.

app.use("/", (req, res) => {
  res.json("asadsdasdasd");
});
let port = process.env.PORT || 4000;
console.log(process.env.PORT);
app.listen(port, () => {
  console.log(`Example app listening at port http:${port}`);
});
module.exports = app;
