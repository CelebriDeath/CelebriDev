'use strict';

module.exports = function(app) {
    app.directive('randomProfileDirective', function() {
        return {
            restrict: 'A',
            templateUrl: './angular/templates/profiles/directives/random_profile_directive.html',
            replace: true
        }
    });
};
