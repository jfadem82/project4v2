angular.module('project4v2', ['ui.router', 'angular-jwt'])
	.directive('navBar', navBar)
	.directive('postForm', postForm)

function postForm(){
	var directive = {
		restrict: 'E',
		templateUrl: '/partials/post-form.html'
	}
	return directive
}

function navBar(){
	var directive = {
		restrict: 'E',
		templateUrl: '/partials/nav.html',
		transclude: true
	}
	return directive
}