angular
	.module('project4v2')
	.factory('editFactory', editFactory)

editFactory.$inject = ['$http']

function editFactory($http){
	var usertoeditURL = 'http://localhost:3000/api/users'
	var url = 'http://localhost:3000/api/posts'
	var edits = {}

	editFactory.list = function(){
		return $http.get(usertoeditURL)
	}

	editFactory.updateinfo = function(userId,data){
		console.log("we in the factory bruh")
		return $http.patch(usertoeditURL + '/' + userId, data)
	}

	return edits
}
