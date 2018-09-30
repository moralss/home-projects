
const Sequelize = require('sequelize');


const sequelize = new Sequelize("school_league", "postgres", "1234", {
    dialect: 'postgres'
});


var stateOwner = sequelize.define('state_owners', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,

}, {
        underscored: true,
        timestamps: true,
        updatedAt: false,
        createdAt: "created_at"
    })

module.exports = stateOwner