'use strict';

require('../../app/angular/js/client');
require('angular-mocks');

describe('random profile controller', function() {
  var $ControllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('CelebriDeath'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $ControllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var randomProfileController = $ControllerConstructor('randomProfileController', {$scope: $scope});
    expect(typeof randomProfileController).toBe('object');
    expect(typeof $scope.randomProfile).toBe('object');
  });
});

describe('individual profile controller', function() {
  var $ControllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('CelebriDeath'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $ControllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var individualProfileController = $ControllerConstructor('individualProfileController', {$scope: $scope});
    expect(typeof individualProfileController).toBe('object');
    expect(typeof $scope.randomProfile).toBe('object');
  });
});

describe('profiles map controller', function() {
  var $ControllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('CelebriDeath'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $ControllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var profilesMapController = $ControllerConstructor('profilesMapController', {$scope: $scope});
    expect(typeof profilesMapController).toBe('object');
    expect(typeof $scope.randomProfile).toBe('object');
  });
});

