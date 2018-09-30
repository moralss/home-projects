const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const playInfo = require("./database/player-info");
const sendMessage = require("./sendGrid.js")

const app = express();
var jsonParser = bodyParser.json();
app.use(cors());
app.use(jsonParser);


app.get("/playerInfo", async function (req, res) {
    const showPlayer = await playInfo.findAll({});
    res.send(showPlayer).status(201);
})


app.post("/playerInfo", async function (req, res) {
    const playerbio = req.body;

    const update = await playInfo.build({
        name: playerbio.name,
        surname: playerbio.surname,
        email : playerbio.email,
        jersay_number: playerbio.jerseyNumber,
        player_position: playerbio.playerPosition,
        age: playerbio.selectAge
    }).save();

    sendMessage.sendMessage(playerbio.email, 
        "thanks for submited the email",
         "awesome thanks man",
    
        )
    


    res.sendStatus(201);


})


app.listen(3000, function () {
    console.log("port running 3003");
})






