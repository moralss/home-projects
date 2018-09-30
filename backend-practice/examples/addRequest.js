const Sequelize = require('sequelize');
var Players = require('./models/players');
const express = require('express');
const router = express.Router()


router.post("/add", async (req, res) => {
    const newProfile = await req.body;
    console.log("values :", newProfile);
    Players.build({ name: newProfile.name, goals: newProfile.goals }).save();  
    res.send(201).end();
  
  });

  module.exports = router;
  