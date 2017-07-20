var express = require('express');
var home = require('./app/routes/home');

module.exports = function(){
	var app = express();

	// variáveis de ambiente - chave e valor
	app.set('port', 3000);
	app.set('view engine', ejs);
	app.set('views', './app/views');

	// middlewares
	app.use(express.static('./public'));
	home(app);

	return app;
};