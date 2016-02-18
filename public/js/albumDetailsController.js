angular.module('project4v2')
	.controller('AlbumDetailsController', AlbumDetailsController)

AlbumDetailsController.$inject = ['albumsFactory','$stateParams','$location']

function AlbumDetailsController(albumsFactory,$stateParams,$location){
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

}