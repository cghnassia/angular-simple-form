'use strict';

angular.module('simple-form')

.directive('footer', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "components/footer/footer.html",
    controller: ['$scope', function ($scope) {
    }]
  }
});