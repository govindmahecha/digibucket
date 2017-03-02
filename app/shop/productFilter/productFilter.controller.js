angular.module('productFilter')
     .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
   $scope.slider = {
  min: 299,
  max: 8000,
  options: {
    floor: 299,
    ceil: 19480
  }
};
    $scope.plusMinus  = 'remove';
    $scope.hideBrands = false;
    $scope.myValue1 = 10;
    $scope.brands = [
        'Micromax',
        'Sony',
        'HTC',
        'Samsung',
        'Panasonic',
        'Lenovo',
        'Motorola',
        'Apple'
    ]
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
  })