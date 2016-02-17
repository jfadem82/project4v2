angular.module('project4v2')
	.controller('AlbumsController', AlbumsController)

AlbumsController.$inject = ['albumsFactory']

function AlbumsController (albumsFactory){
	var vm = this;
	vm.api = albumsFactory
	vm.albums = []
	vm.newAlbum = {}
	vm.api.list()
		.success(function(res){
			vm.albums = res
		})
	vm.addAlbum = function(name){
			console.log("running addAlbum in albumsController")
		var data = {name:name}
			console.log("data is "  + JSON.stringify(data))
			
		vm.api.addAlbum(data)
			.then(function success(res){
				vm.albums.push(res.data.album)
				vm.newAlbum = {}
			})
	}
}

