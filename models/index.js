'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/..\config\config.json')[env];
var db        = {};

var sequelize = {}

if ( true === false ) {
    console.log('hup')
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    console.log('hup')
    sequelize = new Sequelize('vue', 'loubot', 'pass', {
        host: 'localhost',
        dialect: 'mysql',

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },


      // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
        operatorsAliases: false
    }); 
}

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
