'use strict';

describe('HomeCtrl', function() {
  var homeCtrl;

  beforeEach(function() {
    module('simple-form');
    inject(function($controller) {
      homeCtrl = $controller('HomeCtrl', {});
    });
  });

  it('should be defined', function() {
    expect(homeCtrl).toBeDefined();
  });
});