angular
	.module('project4v2')
	.factory('albumsFactory', albumsFactory)

albumsFactory.$inject = ['$http']

function albumsFactory($http){
	var albumsUrl = 'http://localhost:3000/api/albums'
	var albums = {}

	albums.list = function(){
		return $http.get(albumsUrl)
	}

	albums.show = function(albumId){
		return $http.get(albumsUrl + '/' + albumId)
	}

	albums.addAlbum = function(data){
		return $http.post(albumsUrl, data)
	}
	
	return posts
}