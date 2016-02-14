'use strict';

angular.module('simple-form', [
  'ngRoute',
  'angular-repeat-n',
  'review-service'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/home.html', 
    controller: 'HomeCtrl'
  })
  .when('/form', {
    templateUrl: 'templates/form.html', 
    controller: 'FormCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
