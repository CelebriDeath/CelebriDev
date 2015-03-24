'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('lodash');
require('angular-google-maps');

var CelebriDeath = angular.module('CelebriDeath', ['ngRoute', 'ngCookies', 'uiGmapgoogle-maps']);


//services
require('./services/api-service')(CelebriDeath);
// constants
require('./constants/constants')(CelebriDeath);

//controllers
require('./profiles/controllers/random-profile-controller')(CelebriDeath);
require('./profiles/controllers/google-map-controller')(CelebriDeath);

//directives
//require('./directives/dummy_directive')(CelebriDeath);
//require('./directives/create_resource_directive')(CelebriDeath);
require('./profiles/directives/random-profile-directive')(CelebriDeath);
require('./profiles/directives/google-map-directive')(CelebriDeath);

//CelebriDeath.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
//    uiGmapGoogleMapApiProvider.configure({
//        //    key: 'your api key',
//        v: '3.17',
//        libraries: 'weather,geometry,visualization'
//    });
//}]);

//CelebriDeath.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider
//        .when('/zh.html', {
//            templateUrl: 'templates/profiles/random_profile.html',
//            controller: 'randomProfileController'
//        })
//        .otherwise({
//            templateUrl: 'four_oh_four.html'
//        })
//}]);
