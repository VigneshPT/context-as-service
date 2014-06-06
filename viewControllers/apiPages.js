module.exports.controller = function(app){
	app.get('/',function(req,res){

		res.render('home');
	});
	
	app.get('/register',function(req,res){
	    res.render('registration');
	});
	
	//app.post('/')
}