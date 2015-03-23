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
    // add a to do list; change state declaration
    $stateProvider.state('app.todos', {
        abstract: true,
        url: '/todos',
        views: {
            todos: {
                template: '<ion-nav-view></ion-nav-view>'
            }
        }
    })

    // creating nested levels of state machine namespaced to app.todos

    // state transition 2
    $stateProvider.state('app.todos.index', {
        url: '',
        templateUrl: 'todos.html',
        controller: 'TodosCtrl'
    })

    // state transition 3
    // make sure our data was available before we rendered the route and made it available
    $stateProvider.state('app.todos.detail', {
        url: '/:todo',
        templateUrl: 'todo.html',
        controller: 'TodoCtrl',
        resolve: {
            todo: function ($stateParams, TodosService) {
                return TodosService.getTodo($stateParams.todo)
            }
        }
    });
    /*
    $stateProvider.state('app.todos.detail', {
        url: '/:todo',
        templateUrl: 'todos.html',
        controller: 'TodosCtrl'
    })
    */
})

// declare TodosCtrl that will contain Todos data, pass it to the scope
// create a singleton representation of Todos, that can be read and updated from multiple sources; ie use services
app.controller('TodosService', function () {
    var todos = [
        {
            title: "Take out the trash",
            done: true
        },
        {
            title: "Do laundry",
            done: false
        },
        {
            title: "Start cooking dinner",
            done: false
        }
   ]

    return {
        todos: todos,
        getTodo: function (index) {
            return todos[index]
        }
    }
})

// TodosCtrl code now becomes
app.controller('TodosCtrl', function ($scope, TodosService) {
    $scope.todos = TodosService.todos
});

// setup a TodoCtrl to access this data
app.controller('TodoCtrl', function($scope, todo) {
  $scope.todo = todo
});

/*
app.controller('TodosCtrl', function($scope) {
  $scope.todos = [
      {title: "Take out the trash", done: true},
      {title: "Do laundry", done: false},
      {title: "Start cooking dinner", done: false}
   ]
})
*/

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