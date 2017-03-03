'use strict';

angular.module('productsListModule')
    .controller('productsController',['$scope','SearchService','ProductService','$log',function($scope,SearchService,ProductService,$log){
        $scope.products = ProductService.query();
        $scope.$watch(function(){
            return SearchService.getSearch();
        },function(newVal,oldVal){
            $scope.search = SearchService.getSearch();
        });
        
        $scope.pro = {
            'min' : '10000',
            'max' : '12000'
        };
        $scope.$watch(function(){
            return SearchService.getPriceRange();
        },function(newVal,oldVal){
            console.log(newVal);
            $scope.pro = SearchService.getPriceRange();
        });
        
       $scope.orderBy = 'age'; 
        
        
    }]);