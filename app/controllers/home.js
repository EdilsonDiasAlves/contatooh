module.exports = {
	index: function(req, res){
		res.render('index', {nome: 'Express'});
	}
};