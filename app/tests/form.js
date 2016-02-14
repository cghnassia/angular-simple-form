'use strict';

describe('FormCtrl', function() {
  var scope;
  var controller;
  var reviewService = {
    reviews: [],
    findAll: function() {
      return this.reviews;
    },

    create: function(review) {
      this.reviews.push(review);
    },
  }

  beforeEach(function() {
    module('simple-form');
    inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      controller = $controller;
    });
  });

  it('should be defined', function() {
    var formCtrl = controller('FormCtrl', {$scope: scope, reviewService: reviewService});
    expect(formCtrl).toBeDefined();
  });

  it('reviews should be empty when service review return no review', function() {
    var formCtrl = controller('FormCtrl', {$scope: scope, reviewService: reviewService});
    expect(scope.reviews.length).toBe(0);
  });

  it('reviews should have the same size of findAll service', function() {
    reviewService.reviews = [{
      note: 1,
      email: 'foo@bar.com',
      comment: 'azerty'
    }, {
      note: 4,
      email: 'foo@booz.com',
      comment: 'querty'
    }, {
      note: 5,
      email: 'john.deer@mail.com',
      comment: 'toto'
    }];
    var formCtrl = controller('FormCtrl', {$scope: scope, reviewService: reviewService});
    expect(scope.reviews.length).toBe(3);
  });

  it('calling clickAdd function should make isFormVisible to true', function() {
    var formCtrl = controller('FormCtrl', {$scope: scope, reviewService: reviewService});
    scope.clickAdd();
    expect(scope.isFormVisible).toBe(true);
  });
});