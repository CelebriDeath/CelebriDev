'use strict';

module.exports = function(app) {
    app.directive('googleMapDirective', function() {
        return {
            restrict: 'A',
            templateUrl: './angular/templates/profiles/directives/google_map_directive.html',
            replace: true
        }
    });
};
