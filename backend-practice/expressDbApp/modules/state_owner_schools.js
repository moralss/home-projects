const Sequelize = require('sequelize');

const sequelize = new Sequelize("school_league", "postgres", "1234", {
    dialect: 'postgres'
});


var stateOwnerSchools = sequelize.define('state_owner_schools', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    school_id: Sequelize.INTEGER,
    state_owner_id: Sequelize.INTEGER,

}, {
        underscored: true,
        timestamps: true,
        updatedAt: false,
        createdAt: "created_at"
    })

module.exports = stateOwnerSchools