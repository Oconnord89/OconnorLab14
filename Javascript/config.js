//getter syntax
var app = angular.module('myModule');

app.config(function($routeProvider) {

  $routeProvider
    .when('/dog', {
      controller: 'routeCtrl',
      templateUrl: 'dog.html'
    })
    .when('/cat', {
      controller: 'routeCtrl',
      templateUrl: 'cat.html'
    });




});
