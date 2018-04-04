'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require( '../config/config.json' )
var db        = {};

var sequelize = {}


if ( process.env.NODE_ENV === 'production' ) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize( config.development.database, config.development.username, config.development.password, {
        host: config.development.host,
        dialect: config.development.dialect,

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
