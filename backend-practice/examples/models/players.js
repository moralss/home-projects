const Sequelize = require('sequelize');
const sequelize = new Sequelize('players', 'postgres', '1234', {
    dialect: 'postgres'
});


module.exports = sequelize.define('stats', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,
    goals:Sequelize.INTEGER,
    
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE

}, {
        timestamps: true,
        updatedAt: false,
        createdAt: "created_at"
    })

