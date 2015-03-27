'use strict';

module.exports = function (app) {
    app.controller('individualProfileController', ['$rootScope', '$scope', 'ApiService', '$location', '$routeParams', function ($rootScope, $scope, ApiService, $location, $routeParams) {

        $scope.init = function () {
            ApiService.Profiles.getById($routeParams.id)
                .success(function (data, status) {
                    $scope.randomProfile = data;
                    $scope.initMap();
                })
                .error(function (data) {
                    $location.path('/');
                });
        };

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
                animation: google.maps.Animation.DROP
            });

            google.maps.event.addListener(marker, 'click', toggleBounce);
            function toggleBounce() {

                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }

        };


    }]);
};
