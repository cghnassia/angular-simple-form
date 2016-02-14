'use strict';

angular.module('simple-form')

.directive('header', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "components/header/header.html",
    controller: ['$scope', '$route', '$location', '$filter', function ($scope, $route, $location, $filter) {
      $scope.getClass = function (path) {
        if ($location.path() === path) {
          return 'active';
        } else {
          return '';
        }
      }
    }]
  }
});