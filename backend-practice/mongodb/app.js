const mongoose = require('mongoose');
const Article = require('./articles');
const User = require('./users');
const jwt = require('jwt-simple');

const secret = '35ffdf46hh'


const bcrypt = require('bcryptjs');
const passport = require('passport');


const bodyparser = require('body-parser');

const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');

let express = require('express');

require('./passport')(passport);
require('./Auth')(passport);

let app = express();

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', function () {
    console.log('Connected to MongoDB');
})


db.once('error', function () {
    console.log(err);
})

app.use(cors());
app.use(bodyparser.json());
app.use(passport.initialize());
app.use(passport.session());



function tokenForUser(user) {
    const timestamp = new Date().getTime();

    
    return jwt.encode({ sub: user.id, lat: timestamp }, secret);
}


app.get('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    console.log("logined in ");
    // let articles = await User.find({});
    // res.send(articles);
    res.send("you are logged in");
});


app.post('/register', async function (req, res) {

    let userRegisterDetails = {
        username: req.body.username,
        password: req.body.password
    }


    console.log(userRegisterDetails);

    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            console.log(err);
            return;
        }
        else {
            bcrypt.hash(userRegisterDetails.password, salt, async function (err, hash) {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    userRegisterDetails.password = hash;
                    let CreateUser = new User(userRegisterDetails);
                    await CreateUser.save();
                    res.json({ token: tokenForUser(CreateUser) });
                }
            })
        }
    })
})


app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
);


app.listen(3000, function () {
    console.log("port running on 3000");
})








