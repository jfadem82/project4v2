angular
	.module('project4v2')
	.factory('postsFactory', postsFactory)

postsFactory.$inject = ['$http']

function postsFactory($http){
	var postsUrl = 'http://localhost:3000/api/posts'
	var posts = {}

	posts.list = function(){
		return $http.get(postsUrl)
	}

	posts.show = function(postId){
		return $http.get(postsUrl + '/' + postId)
	}

	posts.addPost = function(data){
		console.log("data is " + JSON.stringify(data))
		
		return $http.post(postsUrl, data)
	}

	posts.addAlbumPost = function(data){
		console.log("data is " + JSON.stringify(data))

		return $http.post(postsUrl, data)
	}

	posts.updatePost = function(postId,data){
		console.log("factory data is " + JSON.stringify(data))
		return $http.patch(postsUrl + '/' + postId, data)
	}

	posts.removePost = function(postId){
		return $http.delete(postsUrl + '/' + postId)
	}
	
	return posts
}