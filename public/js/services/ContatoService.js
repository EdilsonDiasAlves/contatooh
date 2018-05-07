angular.module('sigco').factory('Contato',
  function($resource) {
  return $resource('/contatos/:id');
});