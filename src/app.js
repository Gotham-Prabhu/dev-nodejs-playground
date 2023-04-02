const axios = require("axios");
const express = require("express");

const config = require("../config/config.json");
const env = process.env.NODE_ENV;
const configration = config[env];

const app = express();

console.clear();

app.get("/", (req, res) => {
  res.send("Hello, World! \n How are you doing today ?);
});

app.listen(configration.port, () => {
  console.log(`Server is running at port ${configration.port}`);
});
