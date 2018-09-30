

var school = require('./schools');
const state_owner_schools = require("./state_owner_schools");
const stateOwner = require("./state_owner");
const players = require("./players")


// team.hasOne(school);

// one to one 

// school.hasOne(team);
// team.belongsTo(school);


// one to many
// team.hasMany(players);
// players.belongsTo(team);

school.belongsToMany(stateOwner, { through: state_owner_schools })
stateOwner.belongsToMany(school, { through: state_owner_schools })

school.hasMany(players);
players.belongsTo(school);