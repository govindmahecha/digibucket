angular.module('sideNav')
     .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
    
    $scope.plusMinus  = 'remove';
    $scope.hideBrands = false;
    
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
    $scope.toggleBrands = function(){
        $scope.hideBrands = !$scope.hideBrands;
        $scope.plusMinus =  $scope.hideBrands ? 'add' : 'remove';
        
    }
  })