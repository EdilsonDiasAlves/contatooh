angular.module('sigco').controller('ContatoController',
  function($scope, $routeParams, Contato){

  	$scope.contato = new Contato();

    Contato.get({id: $routeParams.contatoId},
  	  function(contato){
        $scope.contato = contato; 
  	  },
  	  function(erro){
        $scope.mensagem = {
          texto: 'Não foi possível obter o contato.'
        };
        console.log(erro);
      }
    );

    $scope.salva = function(){   	
      $scope.contato.$save()
        .then(function(){
          $scope.mensagem = {texto: 'Salvo com sucesso'};
          //Limpa formulário
          $scope.contato = new Contato();
        })
        .catch(function(erro){
          $scope.mensagem = {texto: 'Não foi possível salvar'};
        });
    };

    Contato.query(  
      function(contatos){
        $scope.contatos = contatos;
      },
      function(erro){
        console.log(erro);
        $scope.mensagem = {
          texto: 'Não foi possível obter a lista de contatos'
        };
      }
    ); 
});