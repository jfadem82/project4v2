angular.module('project4v2')
	.controller('UsersController', UsersController)

UsersController.$inject = ['$state', 'authFactory', '$rootScope', '$window', 'editFactory']

function UsersController($state, authFactory, $rootScope, $window, $editFactory) {
	var vm = this
	vm.user = {}
	vm.api = editFactory
	vm.loggedIn = authFactory.isLoggedIn();	
	vm.signup = signup
	vm.login = login
	vm.logout = logout
	vm.getUser = getUser
	vm.userid = {}
	vm.runthis = authFactory.isLoggedIn()
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
			// console.log("response.data is " +JSON.stringify(response.data))
			vm.user = response.data
			// console.log("vm.user is " + JSON.stringify(vm.user.userid))
			vm.userid = vm.user.userid
			console.log("vm.userid is " + vm.userid)
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
		console.log("bio is " + bio)
		var data = {name:name, bio:bio}
		console.log("data is" + JSON.stringify(data))
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
				$state.go("publicposts")
			} else {
				vm.error = response.data.message
			}
		})
	}
}


