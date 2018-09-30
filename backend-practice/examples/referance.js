var express = require("express");

// const Sequelize = require('sequelize');
 var cors = require("cors");
// var bodyParser = require("body-parser");
 var port = 3003;
 
var app = express();
const sequelize = require("sequelize");
var User = require("./models/players.js");

app.use(cors());
app.use(bodyParser.json());

const data = [{ name: "Moral", position: 8 },
{ name: "Thabo", position: 5 },
{ name: "Sbu", position: 7 }]


const displayPlayers = () => {
  const showUsers = User.findAll({
    where: { name : name}
  });

  return showUsers;
}



app.get('/api', (req, res) => {
  res.send(data);
  console.log("players :", displayPlayers());

});


app.post("/adduser", async (req, res) => {
  const userProfile = req.body;

  players = await User.build({
    name: userProfile.name,
    position: userProfile.position,
  }).save();

  res.status(201).end();
});




app.get('/add', async (req, res) => {
  const name = 'sbu';

  users.build({
    name: name
  }).save();

  res.send(201).end();

});

app.listen(port, () => {
  console.log("server running on localhost:3003 ");
});


var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]























