module.exports.controller = function(app){
	app.get('/collect',function(req,res){
		res.json({"key":"value"});
	});
}