'use strict'

var models = require( '../models' )


module.exports.controller = function( app ) {
	app.get( '/api/user', function( req, res ) {
		console.log( 'user controller /api/user' )
		res.json( 'bla' )
	})
}