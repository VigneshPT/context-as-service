var fsHelper = require('../helpers/foursquareParser');
var config = require("../config");
var cors = require('cors');
module.exports.controller = function(app){
	app.post('/collect',cors(),function(req,res){
	    console.log(req.body);
		var location =req.body.location;
		var speed = req.body.speed;
		
		console.log(location);
		
		var fs = (require('foursquarevenues'))(config.foursquare.clientId,config.foursquare.clientSecret);
		fs.getVenues({"ll":location},function(error,venues){
		    if(!error){
		        //res.json(venues);
		        var keywords = fsHelper.parse(venues);
		        res.json(keywords);
		    }else{
		        console.log(error);
		        res.json({"key":"value"});
		    }
		});
		
	});
}