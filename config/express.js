var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var method_override = require('method-override')();

module.exports = function(){
	var app = express();

	// variáveis de ambiente
	app.set('port', 3000);
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// middlewares
	app.use(express.static('./public'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(method_override);

	//express-load
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};