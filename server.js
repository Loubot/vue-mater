// server.js
'use strict'
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var db = {}
var app = express();
var models = require('./models')
var fs = require( 'fs' )


/* Include all express controllers */
fs.readdirSync('./controllers').forEach(function (file) {
    if(file.substr(-3) == '.js') {
        var route = require('./controllers/' + file);
        route.controller( app );
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