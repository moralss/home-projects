var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var port = 3003;
var app = express();
const router = require('./addRequest')

const Sequelize = require('sequelize');
var Players = require('./models/players');


app.use(cors());
app.use(bodyParser.json());

app.use(router);



app.get("/search/:playername", async (req, res) => {
  const playerName = await req.params["playername"];
  console.log("name :", playerName);
  const array = [];

  const searchResults = await Players.findAll({ where: { name: playerName } });
  res.send(searchResults);

});



app.get("/api", async (req, res) => {
  const results = await Players.findAll({
    attributes: ['name', 'goals'], //object
  }).then(function (list) {
    res.send(list);
  })


})



app.listen(port, () => {
  console.log("server running on localhost:3003 ");

});

























