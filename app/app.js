/**
 * Created by aarchamb on 11/04/2016.
 */

var http = require('http');
var express = require('express');
var path = require('path');
var fs = require('fs');

var favicon = require('serve-favicon');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

// all environments
app.set('port', process.env.PORT || 777);
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(session({ resave: true,
    saveUninitialized: true,
    secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));


app.listen(app.get('port'), function(){ 
    console.log('Mon appli tourne sur le port :  ' + app.get('port'));
});

module.exports.app = app;
