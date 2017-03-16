'use strict';

var app = angular.module('Visor', ['ngRoute','ngResource']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
   .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl',
  })

  .otherwise({
     redirectTo: '/'
   });

});
