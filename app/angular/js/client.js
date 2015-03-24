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
require('./profiles/random-profile-controller')(CelebriDeath);

//directives
//require('./directives/dummy_directive')(CelebriDeath);
//require('./directives/create_resource_directive')(CelebriDeath);

CelebriDeath.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/profile', {
            templateUrl: 'templates/profiles/random_profile.html',
            controller: 'randomProfileController'
        })
        .otherwise({
            templateUrl: 'templates/four_oh_four.html'
        })
}]);
