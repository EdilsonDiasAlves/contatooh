var mongoose = require('mongoose');

module.exports = function(uri){

	mongoose.set('debug',true);

	mongoose.connect(uri, {server : {poolSize : 20}});

	mongoose.connection.on('connected', function(){
		console.log('Mongoose! Conectado em ' + uri);
	});

	mongoose.connection.on('disconnected', function(){
		console.log('Mongoose! Desconectado de ' + uri);
	});

	mongoose.connection.on('error', function(error){
		console.log('Mongoose! Erro na conexão: ' + error);
	});

	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('Mongoose! Desconectado pelo término da aplicação');
			//0 = finalização ocorreu sem erros
			process.exit(0);
		});
	});
}