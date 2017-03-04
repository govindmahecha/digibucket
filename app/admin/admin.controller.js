'use strict';

angular.module('adminPanel')
    .controller('adminController',['$scope','ProductService','$timeout',function($scope,ProductService,$timeout){
        
        $scope.selected = [];
        
        $scope.query = {
            order: 'id',
            limit: 5,
            page: 2
          };
        $scope.products = ProductService.query();
        $scope.promise = false;
        $scope.getDesserts = function () {
            $scope.promise = ProductService.query().$promise;
            
        };

    }]);