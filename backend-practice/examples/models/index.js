var Sequelize = require('sequelize');


var sequelize = new Sequelize('profile', 'postgres', 'Moral007');

const models = {

    users : sequelize.import('./players')
    
};





models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;