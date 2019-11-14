const Sequelize = require('sequelize');


const sequelize = new Sequelize('libary', 'postgres', '1234', {
    dialect: 'postgres'
});

var books = sequelize.define('books', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,
    pages: Sequelize.INTEGER,
    book_genre : Sequelize.STRING,
    author_id : Sequelize.STRING,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE
}, {
        underscored: true,
        timestamps: true,
        updatedAt: false,
        createdAt: "created_at"
    })


module.exports = books;