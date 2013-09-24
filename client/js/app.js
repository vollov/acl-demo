'use strict';

var demoApp = angular.module('appModule', [ 'ngResource' ]);

demoApp.config(function($routeProvider, $locationProvider) {
	
	$routeProvider.when('/', {
		templateUrl : 'partials/index'
	}).when('/settings', {
		templateUrl : 'partials/settings'
	}).when('/about', {
		templateUrl : 'partials/about'
	}).when('/users', {
		controller : 'UserCtrl',
		templateUrl : 'partials/user/list'
	}).when('/user', {
		controller : 'AddUserCtrl',
		templateUrl : 'partials/user/detail'
	}).when('/user/:id', {
		controller : 'EditUserCtrl',
		templateUrl : 'partials/user/detail'
	}).otherwise({
		redirectTo : '/'
	});
	
	$locationProvider.html5Mode(true);
});

demoApp.config(function($httpProvider) {

	var logsOutUserOn401 = function($location, $q, SessionService) {
		var success = function(response) {
			return response;
		};

		var error = function(response) {
			if (response.status === 401) {
				SessionService.unset('authenticated');
				$location.path('/login');
				return $q.reject(response);
			} else {
				return $q.reject(response);
			}
		};

		return function(promise) {
			return promise.then(success, error);
		};
	};

	$httpProvider.responseInterceptors.push(logsOutUserOn401);
});

//.when('/login', {
//	controller : 'LoginCtrl',
//	templateUrl : 'views/login.html'
//})