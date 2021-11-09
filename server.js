var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect("mongoose://localhost/PlantDB");
