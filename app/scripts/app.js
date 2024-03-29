'use strict';

angular.module('angularAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/deckEditor', {
        templateUrl: 'views/deckeditor.html',
        controller: 'DeckeditorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
