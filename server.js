// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var db = {}
app = express();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('vue', 'loubot', 'pass', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);