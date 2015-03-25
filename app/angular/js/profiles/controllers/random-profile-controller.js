'use strict';

module.exports = function (app) {
    app.controller('randomProfileController', ['$rootScope', '$scope', 'ApiService', '$cookies', '$location', '$routeParams', 'profileData', function ($rootScope, $scope, ApiService, $cookies, $location, $routeParams, profileData) {

        $scope.randomProfile = {};
        $rootScope.profiles = profileData.allProfiles;
        var pictureUrls = profileData.pictureUrls;

        $scope.getRandom = function () {
            ApiService.Profiles.get()
                .success(function (data, status) {

                    $rootScope.profiles = data;
                    var randomIndex = Math.floor(Math.random() * data.length);
                    $scope.randomProfile = $rootScope.profiles[randomIndex];
                    $scope.initMap();
                    alert('testing....');
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

        $scope.initMap = function () {
            var geoLocation = $scope.randomProfile.burialCoords.split(',');
            var mapProp = {
                center:new google.maps.LatLng(parseFloat(geoLocation[0]), parseFloat(geoLocation[1])),
                zoom:8,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
            var marker = new google.maps.Marker({
                position: mapProp.center,
                map: map,
                draggable:true,
                animation: google.maps.Animation.DROP,
                title: 'Hello World!'
            });
            google.maps.event.addListener(marker, 'click', toggleBounce);
            function toggleBounce() {

                if (marker.getAnimation() != null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }

        };

    }]);
};
