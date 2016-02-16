angular
	.module('project4v2')
	.controller('AlbumsController', AlbumsController)

AlbumsController.$inject = ['albumsFactory']

function AlbumsController (albumsFactory){
	var vm = this;
	vm.api = postsFactory
	vm.posts = []
	vm.newPost = {}
	vm.api.list()
		.success(function(res){
			vm.posts = res
		})
	vm.addPost = function(make,model,year){
			
		var data = {make:make, model:model, year:year}
		vm.api.addPost(data)
			.then(function success(res){
				vm.posts.push(res.data.post)
				vm.newPost = {}
			})
	}
}

