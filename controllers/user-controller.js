'use strict'

var models = require( '../models' )


module.exports.controller = function( app, strategy ) {
	app.get( '/api/user', strategy.authenticate(), function( req, res ) {
		console.log( 'user controller /api/user' )

		models.User.findOne({ where: { id: '1' } } ).then( user => {
			console.log( user.id )
			res.json( user )
		})
		
	})
}