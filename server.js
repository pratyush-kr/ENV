var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var db = mongoose.connect("mongodb://localhost/PlantDB");

app.listen(3000, function(){
    console.log("Server is up and running");
});

app.post('/login', function(req, res){
    console.log(req.body.name);
    console.log(req.body.password);
});