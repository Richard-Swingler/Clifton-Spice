// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('clifton-spice', ['ionic', 'controllers', 'services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  //provides rooting to the application (changes state on url request)
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/templates/home.html',
    controller: 'dataSourceCtrl'
  }),
  $stateProvider.state('info1', {
    url: '/info1',
    templateUrl: '/templates/info1.html',
    controller: 'dataSourceCtrl'
  }),
  $stateProvider.state('productSelect', {
    url: '/productSelect',
    templateUrl: '/templates/productSelect.html',
    controller: 'dataSourceCtrl'
  }),
  $stateProvider.state('info2', {
    url: '/info2',
    templateUrl: '/templates/info2.html',
    controller: 'dataSourceCtrl'
  }),
  $stateProvider.state('info3', {
    url: '/info3',
    templateUrl: '/templates/info3.html',
    controller: 'dataSourceCtrl'
  }),
  $stateProvider.state('info4', {
    url: '/info4',
    templateUrl: '/templates/info4.html',
    controller: 'dataSourceCtrl'
  }),
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: '/templates/contact.html',
    controller: 'dataSourceCtrl'
  }),
  $stateProvider.state('maps', {
    url: '/maps',
    templateUrl: '/templates/maps.html',
    controller: 'mapsCtrl'
  }),

  $urlRouterProvider.otherwise('/')
})