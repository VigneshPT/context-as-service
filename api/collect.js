var fsHelper = require('../helpers/foursquareParser');
var config = require("../config");
module.exports.controller = function(app){
	app.post('/collect',function(req,res){
	    console.log(req.body);
		var location =req.body.location;
		console.log(location);
		var fs = (require('foursquarevenues'))(config.foursquare.clientId,config.foursquare.clientSecret);
		fs.getVenues({"ll":location},function(error,venues){
		    if(!error){
		        var keywords = fsHelper.parse(venues);
		        res.json(keywords);
		    }else{
		        console.log(error);
		        res.json({"key":"value"});
		    }
		});
		
	});
}