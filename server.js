const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/', function(req,res) {
    res.send('everything works!');
});

// make your model below... done...


//run the migrations.... done...



// creat one record route

app.post('/users', function(req,res) {
    db.user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        favGenre: req.body.favGenre,
        country: req.body.country,
        age: req.body.age
    }).then(function(data) {
        console.log(data);
        res.json(data);
    })
});


// read one record route?

app.get('/users/:id', function(req, res) {
    db.user.findOne({
        where: {id: parseInt(req.params.id)}
    }).then(function(user) {
        res.json(user);
    })
});


// read all record route

app.get('/users', function(req, res) {
    db.user.findAll().then(function(users) {
        res.json(users);
    })
});

// update one record route

app.put('/users/:id', function(req, res) {
    db.user.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        favGenre: req.body.favGenre,
        country: req.body.country,
        age: req.body.age
    }, {
        where:{id: parseInt(req.params.id)}
    }).then(function(count) {
        res.json(count);
    });
});

// delete one record route

app.delete('/users/:id', function(req, res) {
    db.user.destroy({
        where: {id: parseInt(req.params.id)}
    }).then(function(data) {
        res.json(data);
    });
});



app.listen(3000, function() {
    console.log("You're listening to the sweet sounds of 3000 in the morning");
});