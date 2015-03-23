// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('ionicApp', ['ionic'])

// both the $stateProvider and $urlRouterProvider provide the basic blocks necessary to configure our application’s state machine
app.config(function ($stateProvider, $urlRouterProvider) {

    // declaring state
    $urlRouterProvider.otherwise('/home')

    // when this is run, the template is injected where ion-nav-view exists in html
    
    // state transition 1
    $stateProvider.state('home', {
        url: '/home',
        views: {
            help: {
                templateUrl: 'home.html'
            }
        }
    })

    // state transition 2
    $stateProvider.state('help', {
        url: '/help',
        views: {
            help: {
                templateUrl: 'help.html'
            }
        }
    });
})

/*
angular.module('starter', ['ionic'])

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
*/