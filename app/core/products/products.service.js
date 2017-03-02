'use stricts';

angular.module('core.products').
  factory('ProductService', ['$resource',
    function($resource) {
      return $resource('products/:productId.json', {}, {
        query: {
          method: 'GET',
          params: {productId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
