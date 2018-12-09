const jwt = require("jwt-simple");
let secret = "dbnnf45d";

const createToken = (userId, auth) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: userId, lat: timestamp, auth: auth }, secret);
};

module.exports = { createToken };


