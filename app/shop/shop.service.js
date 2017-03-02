angular.module('shopModule')
    .service('SearchService',function($log){
    var self = this;
    this.search = 'sdfsdf';
    
    this.setSearch = function(expression){
        self.search = expression;
    }
    
    this.getSearch = function(){
        return self.search;
    }
})