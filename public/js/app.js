angular.module('project4v2', ['ui.router'])
	.directive('navBar', navBar)
	.directive('postForm', postForm)
	.directive('memoryForm', memoryForm)

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

function memoryForm(){
	var directive = {
		restrict: 'E',
		templateUrl: '/partials/memory-form.html'
	}
	return directive
}