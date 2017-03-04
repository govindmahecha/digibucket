
    'use strict';
    
    angular.module('digiApp')
        .config(['$locationProvider','$routeProvider',function config($locationProvider,$routeProvider){
             $locationProvider.hashPrefix('');
            $routeProvider.
                when('/',{
                templateUrl : 'home/home.template.html',
                controller : 'homeController'
            }).
                when('/shop',{
                templateUrl : 'shop/shop.template.html',
                controller : 'shopController'
            }).
                when('/admin',{
                templateUrl : 'admin/admin.template.html',
                controller : 'adminController'
            })
               .otherwise('/') 
        }])
