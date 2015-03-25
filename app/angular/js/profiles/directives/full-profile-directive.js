'use strict';

module.exports = function(app) {
    app.directive('fullProfileDirective', function() {
        return {
            restrict: 'A',
            templateUrl: './angular/templates/profiles/directives/full_profile_directive.html',
            replace: true
        }
    });
};
