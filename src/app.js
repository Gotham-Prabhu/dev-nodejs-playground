const axios = require("axios");
const express = require("express");   
const app = express();
const middleware = require("../src/routes");

app.use("/cat", middleware);

app.get("/", (req, res) => {
  res.send("Hello, World! How are you doing today ?");
});

module.exports = app;