const express = require("express");
const bodyparse = require("body-parser");
const Sequelize = require("sequelize");
const schools = require("./modules/schools");
const state_owner_schools = require("./modules/state_owner_schools");
const stateOwner = require("./modules/state_owner");
const players = require("./modules/players")
const associations = require("./modules/associations");

const app = express();
app.use(bodyparse.json());

app.get("/", async (req, res) => {

    var contactRequests = await players.findAll({
        attributes: { exclude: ["school_id"] },
        include: [{
            model: schools,
            attributes: ["school_name"],
            required: true,
            include: [
                
                {
                    model: stateOwner,
                    required: true,
                }]

        }]
    });

    res.send(contactRequests);

})



app.listen(3000, function () {
    console.log("port running on 3000");
})


