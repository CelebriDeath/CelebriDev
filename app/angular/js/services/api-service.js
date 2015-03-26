'use strict';

module.exports = function (app) {

    app.service('ApiService', ['$http',
        function ($http) {
            function request(route, method, data) {
                var config = {
                    url: route,
                    method: method
                };
                if (data) {
                    config.data = data;
                }
                return $http(config);
            }

            var restUrl = '/api/v1';
            return {

                Profiles: {
                    get: function () {
                        return request(restUrl + '/celebs', 'GET');
                    },
                    getRandom: function () {
                        return request(restUrl + '/celebs/random', 'GET');
                    },
                    getById: function (id) {
                        return request(restUrl + '/celebs/' + id, 'GET');
                    }
                }
            };
        }]);
};