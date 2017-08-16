var contatos = [
	{_id: 1, nome: 'Contato Exemplo 1',
	 email: 'cont1@empresa.com.br'},
	{_id: 2, nome: 'Contato Exemplo 2',
	 email: 'cont2@empresa.com.br'},
	{_id: 3, nome: 'Contato Exemplo 3',
	 email: 'cont3@empresa.com.br'}
];

var ID_CONTATO_INC = 3;

function adiciona(contatoNovo){
 	contatoNovo._id = ++ID_CONTATO_INC;
	contatos.push(contatoNovo);
	return contatoNovo;
}

function atualiza(contatoAlterar){
	contatos = contatos.map(function(contato){
    	if(contato._id == contatoAlterar._id){
    		contato = contatoAlterar;
    	}
    	return contato;
  	});
  return contatoAlterar;
}

module.exports = {
	listaContatos : function(req, res){
		res.json(contatos);
	},
	salvaContato : function(req, res){
		var contato = req.body;
		contato = contato._id ?
			atualiza(contato) :
			adiciona(contato)
		res.json(contato);
	},
	obtemContato : function(req, res){
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];

		contato ?
			res.json(contato) :
			res.status(404).send('Contato não encontrado');
	},
	removeContato : function(req, res){
		var idContato = req.params.id;
	  	console.log('Removendo contato de codigo ' + idContato);
	  	contatos = contatos.filter(function(contato){
	  		return contato._id != idContato;
	  	});
	  	res.sendStatus(204).end();
	}
};