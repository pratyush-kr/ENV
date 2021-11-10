var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect("mongoose://localhost/PlantDB");

app.listen(7870, function(){
    console.log("Server is up and running");
});

app.post('/login', function(req, res){
    var form = document.getElementById('form');
});