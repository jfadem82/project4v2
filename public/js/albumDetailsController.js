angular.module('project4v2')
	.controller('AlbumDetailsController', AlbumDetailsController)

AlbumDetailsController.$inject = ['albumsFactory','$stateParams','$location', '$sce']

function AlbumDetailsController(albumsFactory,$stateParams,$location,$sce){
	var vm = this
	vm.name = 'Album Detail'
	vm.api = albumsFactory
	vm.album = null
	vm.editing = false
	vm.showAlbum = function(albumId){
		vm.api.show(albumId).success(function(response){
			vm.album = response
		})
	}
	vm.showAlbum($stateParams.albumId)

	vm.removePost = function(albumId){
		vm.api.removePost(albumId).success(function(response){
			console.log(response)
			$location.path('/album-form')
		})
	}
	vm.trustSrc = function(src){
		return $sce.trustAsResourceUrl(src);
	}
}








