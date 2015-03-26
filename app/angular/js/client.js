'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');

var CelebriDeath = angular.module('CelebriDeath', ['ngRoute', 'ngCookies']);


//services
require('./services/api-service')(CelebriDeath);
// constants
require('./constants/constants')(CelebriDeath);

//controllers
require('./profiles/controllers/random-profile-controller')(CelebriDeath);
require('./profiles/controllers/individual-profile-controller')(CelebriDeath);
require('./maps/controllers/profiles-map-controller')(CelebriDeath);


//directives
//require('./profiles/directives/random-profile-directive')(CelebriDeath);
require('./profiles/directives/google-map-directive')(CelebriDeath);

CelebriDeath.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'angular/templates/profiles/random_profile.html',
            controller: 'randomProfileController'
        })
        .when('/profiles/:id', {
            templateUrl: 'angular/templates/profiles/individual_profile.html',
            controller: 'individualProfileController'
        })
        .when('/maps', {
            templateUrl: 'angular/templates/maps/profiles_map.html',
            controller: 'profilesMapController'
        })
        .otherwise({
            templateUrl: 'four_oh_four.html'
        })
}]);
