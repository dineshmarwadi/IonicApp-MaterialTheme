var app = angular.module('myApp', ['ionic']);
app.config(function($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html'
  })
  .state('AddVendor', {
      url: '/AddVendor',
      templateUrl: 'AddVendor.html'
  });
});