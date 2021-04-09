var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/stud.html',
    controller  : 'studCntroller'
  })

  .when('/reg', {
    templateUrl : 'pages/reg.html',
    controller  : 'regController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('studCntroller', function($scope) {
  
});

app.controller('regController', function($scope) {
  $scope.s1 = 0;
  $scope.s2 = 0;
  $scope.s3 = 0;
  $scope.s4 = 0;
});

