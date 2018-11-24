const _ = require('lodash');
const { getUser } = require("../queries/user");
const { getAuthor } = require("../queries/author");
// email, password, author


const validateRegisterUser = async (data) => {
    let errors = {};


    console.log(data.author == '');

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(data.email)) {
        errors.email = "email is invalid";
    }

    
    author = await getAuthor(data.author);
    const user = await getUser(data.email);

    if (author) {
        errors.author = 'this author name is taken';
    }

    if (data.author === undefined) {
        errors.author = 'author is required';
    }

    if (user) {
        errors.email = 'this email is already in use';
    }
    if (data.email === "") {
        errors.email = 'email is required';
    }

    if (data.password === undefined) {
        errors.password = 'password is required';
    }
    console.log(data.password);


    if (data.author === "") {
        errors.author = "author is required";
    }

    console.log("errors", errors);

    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}





module.exports = { validateRegisterUser };


