
const Sequelize = require('sequelize');


const sequelize = new Sequelize("school_league", "postgres", "1234", {
    dialect: 'postgres'
});


var schools = sequelize.define('schools', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    school_name: Sequelize.STRING,

}, {
        underscored: true,
        timestamps: true,
        updatedAt: false,
        createdAt: "created_at"
    })

module.exports = schools