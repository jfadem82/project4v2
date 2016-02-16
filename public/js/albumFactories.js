angular
	.module('project4v2')
	.factory('albumsFactory', albumsFactory)

albumsFactory.$inject = ['$http']

function albumsFactory($http){
	var postsUrl = 'http://localhost:3000/api/posts'
	var posts = {}

	posts.list = function(){
		return $http.get(postsUrl)
	}

	posts.show = function(postId){
		return $http.get(postsUrl + '/' + postId)
	}

	posts.addAlbum = function(data){
		return $http.post(postsUrl, data)
	}
	
	return posts
}