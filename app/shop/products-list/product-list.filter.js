'use strict';

angular.module('productsListModule')
    .filter('priceRange',function(){
        return function(items, priceRange){
    var filtered = [];
    var min = parseInt(priceRange.min);
    var max = parseInt(priceRange.max);
    
    angular.forEach(items,function(item){
        if(item.price >= min && item.price <= max){
            filtered.push(item);
        }
    });
    return filtered;
}
            
});