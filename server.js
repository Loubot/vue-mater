// server.js
'use strict'
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var db = {}
var app = express();
var models = require('./models')
var fs = require( 'fs' )
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')


// Initialise passport
var passport = require("passport");
app.use( passport.initialize() )
var strategy = require('./config/strategy')( passport )

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(function(req, res, next) {
  	res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
  	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  	next();
});
/* Include all express controllers */
fs.readdirSync('./controllers').forEach(function (file) {
    if(file.substr(-3) == '.js') {
        var route = require('./controllers/' + file);
        route.controller( app, strategy );
        // route.controller( app, jwt, strategy );
    }
})

models.sequelize.sync( { force: false } ).then(function() {
    console.log('sequelize done')
});

app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);