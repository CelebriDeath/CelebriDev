'use strict';

module.exports = function (app) {
    app.controller('randomProfileController', ['$rootScope', '$scope', 'ApiService', '$cookies', '$location', '$routeParams', 'profileData', function ($rootScope, $scope, ApiService, $cookies, $location, $routeParams, profileData) {

        $scope.randomProfile = {};
        $rootScope.profiles = profileData.allProfiles;
        var pictureUrls = profileData.pictureUrls;

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
            var randomIndex = Math.floor(Math.random() * $rootScope.profiles.length);
            $scope.randomProfile = $rootScope.profiles[randomIndex];
            $scope.randomProfile.photoLink = pictureUrls[Math.floor(Math.random() * pictureUrls.length)];
        };

        $scope.random = function () {
            $scope.init();
        };

        $scope.initMap = function () {
            $scope.map = {center: {latitude: 51.219053, longitude: 4.404418}, zoom: 14};
            $scope.options = {scrollwheel: false};
        }

    }]);
};
