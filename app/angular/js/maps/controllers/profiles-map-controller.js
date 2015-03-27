'use strict';

module.exports = function (app) {
    app.controller('profilesMapController', ['$rootScope', '$scope', 'ApiService', '$cookies', '$location', function ($rootScope, $scope, ApiService, $cookies, $location) {

        $scope.randomProfile = {};

        $scope.getAll = function () {
            ApiService.Profiles.get()
                .success(function (data, status) {
                    $scope.allProfile = data;
                    $scope.filteredProfile = $scope.allProfile;
                    $scope.initMap();
                })
                .error(function (data) {
                    $location.path('/');
                });
        };

        $scope.search = function (input) {
            $scope.filteredProfile = $scope.allProfile.filter(function (item) {
                return item.moniker.indexOf(input) > -1;
            });

            $scope.initMap();
            $scope.filteredProfile = $scope.allProfile;
        };

        $scope.initMap = function () {
            var mapProp = {
                center:new google.maps.LatLng(39.234416, -94.848398),
                zoom:3,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

            var infowindow = new google.maps.InfoWindow();


            var marker, i;

            for (i = 0; i < $scope.filteredProfile.length; i++) {
                var geoLocation = $scope.filteredProfile[i].burialCoords.split(',');
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(parseFloat(geoLocation[0]), parseFloat(geoLocation[1])),
                    map: map
                });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        var currentPerson = $scope.filteredProfile[i];
                        var contentString =
                                '<h2>' + currentPerson.moniker + '</h2>' +
                                '<h3>' + currentPerson.category1 + '</h3>' +
                                '<p><a href="/#/profiles/' + currentPerson._id + '">Detail</a></p>';


                        infowindow.setContent(contentString);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }


        };



    }]);
};
