'use strict';

module.exports = function(app) {
    app.directive('randomProfileDirective', function() {
        return {
            restrict: 'A',
            templateUrl: '../../../templates/profiles/random_profile_directive.html',
            replace: true
        }
    });
};
