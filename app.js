
/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http'),
	path = require('path'),
	fs = require('fs'),
	app = express(),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  cookieParser= require('cookie-parser'),
  session = require('express-session'),
  errorHandler = require('errorhandler');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser());
// app.use(express.logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded());
app.use(methodOverride());
//app.use(express.methodOverride());
app.use(cookieParser('your secret here'));
//app.use(express.cookieParser('your secret here'));
app.use(session());
//app.use(express.session());
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(app.router);
//app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

// dynamically include routes (Controller)
fs.readdirSync(__dirname+'/api').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require(__dirname+'/api/' + file);
      route.controller(app);
  }
});


http.createServer(app).listen(app.get('port'),process.env.IP || 'localhost', function(){
  console.log('Express server listening on port ' + app.get('port'));
});
exports.app = app;