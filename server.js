const axios = require("axios");
const express = require("express");

const app = express();

console.clear();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("server running at 3000");
});
