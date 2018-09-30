 const Sequelize = require('sequelize');

const sequelize = new Sequelize('libary', 'postgres', '1234', {
    dialect: 'postgres'
});

var authors = sequelize.define('authors', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE
}, {
        underscored: true,
        timestamps: true,
        updatedAt: false,
        createdAt: "created_at"
    })


module.exports = authors;