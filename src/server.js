const app = require("./app");
console.clear();

const config = require("../config/config.json");
const env = process.env.NODE_ENV;
const configration = config[env];

app.listen(configration.port, () => {
    console.log(`Server is running at port ${configration.port}`);
  });