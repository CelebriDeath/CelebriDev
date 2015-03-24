'use strict';

module.exports = function (app) {
    app.controller('googleMapController', ['$rootScope', '$scope', 'ApiService', '$cookies', '$location', '$routeParams', 'profileData', function ($rootScope, $scope, ApiService, $cookies, $location, $routeParams, profileData) {


        $scope.initMap = function () {
            var geoLocation = $scope.randomProfile.burialCoords.split(',');
            var mapProp = {
                center:new google.maps.LatLng(parseFloat(geoLocation[0]), parseFloat(geoLocation[1])),
                zoom:8,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
            google.maps.event.addDomListener(window, 'load', initialize);

        };
    }]);
};
