'use strict';

module.exports = function (app) {
    app.controller('profilesMapController', ['$rootScope', '$scope', 'ApiService', '$cookies', '$location', function ($rootScope, $scope, ApiService, $cookies, $location) {

        $scope.randomProfile = {};

        $scope.getRandom = function () {
            ApiService.Profiles.get()
                .success(function (data, status) {
                    $scope.allProfile = data;
                    console.log(data);
                    $scope.initMap();
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

        $scope.initMap = function () {
            //var geoLocation = $scope.randomProfile.burialCoords.split(',');
            //var mapProp = {
            //    center:new google.maps.LatLng(parseFloat(geoLocation[0]), parseFloat(geoLocation[1])),
            //    zoom:8,
            //    mapTypeId:google.maps.MapTypeId.ROADMAP
            //};
            //var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
            //var marker = new google.maps.Marker({
            //    position: mapProp.center,
            //    map: map,
            //    draggable:true,
            //    animation: google.maps.Animation.DROP
            //});
            //google.maps.event.addListener(marker, 'click', toggleBounce);
            //function toggleBounce() {
            //
            //    if (marker.getAnimation() != null) {
            //        marker.setAnimation(null);
            //    } else {
            //        marker.setAnimation(google.maps.Animation.BOUNCE);
            //    }
            //}

        };

    }]);
};