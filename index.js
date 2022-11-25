const path = require("path");
require("dotenv").config();

const express = require("express");
const app = express();

const { dirname } = require("path");

app.use(express.json());

// Req and Res logger.

app.use(express.static(path.join(__dirname, "/ferro")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/ferro/build", "index.html"));
});
let port = process.env.PORT || 4000;
console.log(process.env.PORT);

app.listen(port, () => {
  console.log(`Example app listening at port http:${port}`);
});
module.exports = app;
