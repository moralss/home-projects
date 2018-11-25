const jwt = require("jwt-simple");
let secret = "dbnnf45d";

const createToken = (userId) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: userId, lat: timestamp }, secret);
};

module.exports = { createToken };


