const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/', function(req,res) {
    res.send('everything works!');
});

// make your model below

db.user.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    favGenre: req.body.favGenre,
    country: req.body.country,
    age: req.body.age
}).then(function(data){
    res.json(data);
});

//run the migrations



// creat one record route



// read one record route



// read all record route



// update one record route



// delete one record route





app.listen(3000, function() {
    console.log("You're listening to the sweet sounds of 3000 in the morning");
});