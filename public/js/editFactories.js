angular
	.module('project4v2')
	.factory('editFactory', editFactory)

editFactory.$inject = ['$http']

function editFactory($http){
	var usertoeditURL = 'http://localhost:3000/api/users'
	var url = 'http://localhost:3000/api/posts'

	editFactory.list = function(){
		return $http.get(url)
	}

	editFactory.updateinfo = function(userId,data){
		return $http.patch(usertoeditURL + '/' + userId, data)
	}












	editFactory.updateinfo = function(email, password, name, bio){
			console.log("token is " + $window.localStorage.getItem('token'))
		// return $http.post()
	}
}

	authFactory.signup = function(email, password, name, bio){
		return $http.post('http://localhost:3000/api/users', {
			email: email,
			password: password,
			name: name,
			bio: bio
		})
	}