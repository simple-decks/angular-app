'use strict';

describe('Controller: DeckeditorCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var DeckeditorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeckeditorCtrl = $controller('DeckeditorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
