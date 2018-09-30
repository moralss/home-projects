const Sequelize = require('sequelize');

const sequelize = new Sequelize("school_league", "postgres", "1234", {
    dialect: 'postgres'
});


var players = sequelize.define('players', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,
    surname:Sequelize.STRING,
    school_id: Sequelize.INTEGER,


}, {
        underscored: true,
        timestamps: true,
        updatedAt: false,
        createdAt: "created_at"
})

module.exports = players