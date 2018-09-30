const Sequelize = require('sequelize');
const sequelize = new Sequelize('players', 'postgres', '1234', {
    dialect: 'postgres'
});


module.exports = sequelize.define('details', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    age: Sequelize.STRING,
    
    
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE


}, {
        timestamps: true,
        updatedAt: false,
        createdAt: "created_at"
    })

