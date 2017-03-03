angular.module('shopModule')
    .service('SearchService',function($log){
    var self = this;
    this.search = '';
    this.brands = [];
    this.priceRange = {
        'min' : 299,
        'max' : 19480
    }
    
    this.setSearch = function(expression){
        self.search = expression;
    }
    
    this.getSearch = function(){
        return self.search;
    }
    
    this.setBrands = function(brands){
        self.brands = brands;
    }
    
    this.getBrands = function(){
        return self.brands;
    }
    
    this.setPriceMax = function(max){
        self.priceRange.max = max;
    }
    
    this.setPriceMin = function(min){
        self.priceRange.min = min;
    }
    
    this.getPriceRange = function(){
        return self.priceRange;
    }
})