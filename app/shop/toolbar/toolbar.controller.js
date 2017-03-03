'use strict';

angular.module('shopToolbar')
    .controller('ToolbarController',['$scope','SearchService',function($scope,SearchService){
        $scope.search = '';
        $scope.$watch('search',function(newVal,oldVal){
            console.log('changed from '+oldVal+" to "+newVal);
            SearchService.setSearch(newVal);
                
        });
        
    }]);