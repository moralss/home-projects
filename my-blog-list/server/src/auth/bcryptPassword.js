const bcrypt = require("bcryptjs");

const bcryptPassword = async userPassword => {

    try{
        let salt = await bcrypt.genSalt(10);    
        let hashsed = await bcrypt.hash(userPassword , salt);
        return hashsed;

    }catch(e){
        console.log(e);
    }

};

module.exports = { bcryptPassword };
