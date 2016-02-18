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

	vm.trustSrc = function(src){
		return $sce.trustAsResourceUrl(src);
	}

}



// app.controller('MainCtrl', function($scope, $sce) {
//   $scope.trustSrc = function(src) {
//     return $sce.trustAsResourceUrl(src);
//   }

//   $scope.movie = {src:"http://www.youtube.com/embed/Lx7ycjC8qjE", title:"Egghead.io AngularJS Binding"};
// });





