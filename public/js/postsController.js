angular
	.module('project4v2')
	.controller('PostsController', PostsController)

PostsController.$inject = ['postsFactory', '$window']

function PostsController (postsFactory, $window){
	var vm = this;
	vm.api = postsFactory
	vm.posts = []
	vm.newPost = {}
	vm.api.list()
		.success(function(res){
			vm.posts = res
		})
	




	vm.addPost = function(description, date, avatar_url, isPrivate){
		console.log("isPrivate = " + isPrivate)
		var data = {description:description, date:date, avatar_url:avatar_url, isPrivate:isPrivate}
		
		vm.api.addPost(data)
			.then(function success(res){
				vm.posts.push(res.data.post)
				vm.newPost = {}
			})
		

	}
	vm.uploadFile = function($window){

		function init_upload(){
			console.log("here")
		}
		

	}

}

