const path = require("path");

const express = require("express");
const app = express();

const { dirname } = require("path");

app.use(express.json());

// Req and Res logger.

app.use("/", (req, res) => {
  res.json("asadsdasdasd");
});
app.listen(4000, () => {
  console.log(`Example app listening at port http:`);
});
module.exports = app;
