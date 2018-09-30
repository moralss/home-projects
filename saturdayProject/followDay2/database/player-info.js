const Sequelize = require("sequelize");


const sequelize = new Sequelize("players", "postgres", "1234", {
    dialect: 'postgres'
});

const playerInfo = sequelize.define("player_infos", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    email:Sequelize.STRING,
    player_position : Sequelize.STRING,
    jersay_number: Sequelize.INTEGER,
    age: Sequelize.INTEGER,

}, {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false,
    })



module.exports = playerInfo;

