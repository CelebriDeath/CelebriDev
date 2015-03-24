'use strict';

module.exports = function (app) {
    app.controller('randomProfileController', ['$rootScope', '$scope', 'ApiService', '$cookies', '$location', '$routeParams', 'profileData', function ($rootScope, $scope, ApiService, $cookies, $location, $routeParams, profileData) {

        $scope.randomProfile = {};
        $rootScope.profiles = profileData.allProfiles;

        $scope.getRandom = function () {
            ApiService.Organizer.getByUserId($routeParams.userId)
                .success(function (data, status) {
                    $rootScope.profiles = data;
                    var randomIndex = Math.floor(Math.random() * data.length);
                    $scope.randomProfile = data[randomIndex];
                })
                .error(function (data) {
                    $location.path('/');
                });
        };

        $scope.init = function () {
            var randomIndex = Math.floor(Math.random() * data.length);
            $scope.randomProfile = $rootScope.profiles[randomIndex];
        }

        $scope.random = function () {
            $scope.init();
        }

    }]);
};
