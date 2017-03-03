angular.module('productFilter')
     .controller('LeftCtrl',['$scope','$timeout','$mdSidenav','$log','SearchService', function ($scope, $timeout, $mdSidenav, $log,SearchService) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
   $scope.slider = {
  min: 299,
  max: 108740,
  options: {
    floor: 299,
    ceil: 190480
  }
};
    
    $scope.$watch('slider.max',function(newVal,oldVal){
        if(newVal != oldVal){
            SearchService.setPriceMax(newVal);
        }
        
            
    });
         
    $scope.$watch('slider.min',function(newVal,oldVal){
        if(newVal != oldVal){
            SearchService.setPriceMin(newVal);
        }
        
            
    });
    
    $scope.plusMinus  = 'remove';
    $scope.hideBrands = false;
    $scope.myValue1 = 10;
    $scope.brands = [
        'Dell',
        'Sony',
        'HTC',
        'Samsung',
        'Panasonic',
        'Lenovo',
        'Motorola',
        'Apple'
    ];
    
    
    
   $scope.hidePrice = false;
    $scope.price = {
        'plusMinus' : 'remove'
    }
    $scope.toggleBrands = function(){
        $scope.hideBrands = !$scope.hideBrands;
        $scope.plusMinus =  $scope.hideBrands ? 'add' : 'remove';
        
    }
    $scope.togglePrice = function(){
        $scope.hidePrice = !$scope.hidePrice;
        $scope.price.plusMinus = $scope.hidePrice ? 'add' : 'remove';
    }
  }])