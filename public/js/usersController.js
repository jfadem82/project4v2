angular.module('project4v2')
	.controller('UsersController', UsersController)

UsersController.$inject = ['$state', 'authFactory', '$rootScope', '$window', 'editFactory']

function UsersController($state, authFactory, $rootScope, $window, $editFactory) {
	var vm = this
	vm.user = {}
	vm.api = editFactory
	vm.loggedIn = null
	vm.signup = signup
	vm.login = login
	vm.logout = logout
	vm.getUser = getUser
	vm.error = null

	$rootScope.$on('$stateChangeStart', function() {
		vm.loggedIn = authFactory.isLoggedIn();	
		vm.getUser()
		vm.error = null
	});	

	function logout(){
		$state.go('loggedOut')
		authFactory.logout();
		$window.location.reload();
	}

	function getUser(){
		authFactory.getUser()
		.then(function(response){
			vm.user = response.data
		})
	}

	function signup(){
		authFactory.signup(vm.user.email, vm.user.password, vm.user.name, vm.user.bio)
		.then(function(response){
			if(response.data.success){
				vm.login()
			} else {
				vm.error = response.data.message
			}
		})
	}

	vm.overwrite = function(userId, name, bio){
		console.log("running overwrite")
		console.log("userId is " + userId)
		var data = {name:name, bio:bio}
		vm.api.updateinfo(userId, data)
			.success(function (res){
				console.log(vm.user)
				console.log(res)
			})
		
	}

	function login(){
		authFactory.login(vm.user.email, vm.user.password)
		.then(function(response){
			if(response.data.success){
				$state.go("posts")
			} else {
				vm.error = response.data.message
			}
		})
	}
}