'use strict';

angular.module('simple-form')

.controller('FormCtrl', ['$scope', 'reviewService', function($scope, reviewService) {
  $scope.isFormVisible = false;
  $scope.isFormError = false;
  $scope.isFormSubmitted = false;
  $scope.reviews = reviewService.findAll();

  $scope.note = {
    value: 1,
    options: [1, 2, 3, 4, 5],
    error: ''
  };

  $scope.email = {
    value: '',
    pattern: /.+@.+/,
    error: ''
  };

  $scope.comment = {
    value: '',
    error: ''
  };

  $scope.isErrorDisplayed = function(input) {
    return $scope.isFormError && input.$valid === false
  };

  $scope.clickAdd = function() {
    $scope.isFormVisible = true;
  };

  $scope.submitForm = function() {
    $scope.note.error = '';
    $scope.email.error = '';

    if ($scope.reviewForm.$valid) {
      $scope.isFormError = false;
      $scope.isFormVisible = false;
      $scope.isFormSubmitted = true;

      reviewService.create({
        note: $scope.note.value,
        email: $scope.email.value,
        comment: $scope.comment.value
      });

      $scope.reviews = reviewService.findAll();

      $scope.note.value = 1;
      $scope.email.value = '';
      $scope.comment.value = '';
      $scope.reviewForm.$setPristine();

    } else {
      $scope.isFormError = true;
      if ($scope.reviewForm.note.$valid === false) {
        $scope.note.error = "Note should be a value between 1 and 5";
      }

      if ($scope.reviewForm.email.$valid === false) {
        $scope.email.error = "Email should be valid";
      }
    }
  }

}]);