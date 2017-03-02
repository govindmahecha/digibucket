'use strict';

angular.module('productsListModule')
    .controller('productsController',['$scope','SearchService','ProductService','$log',function($scope,SearchService,ProductService,$log){
        $scope.products = ProductService.query();
        $scope.$watch(function(){
            return SearchService.getSearch();
        },function(newVal,oldVal){
            
            $scope.search = SearchService.getSearch();
            
        });
        
        
        
    }]);