angular.module('project4v2')
	.controller('PostDetailsController', PostDetailsController)

PostDetailsController.$inject = ['postsFactory','$stateParams','$location']

function PostDetailsController(postsFactory,$stateParams,$location){
	var vm = this
	vm.name = 'Post Detail'
	vm.api = postsFactory
	vm.post = null
	vm.editing = false
	vm.showPost = function(postId){
		console.log("post id is " + postId)
		vm.api.show(postId).success(function(response){
			vm.post = response
			console.log(response)
		})
	}
	vm.showPost($stateParams.postId)

	vm.updatePost = function(postId, memory, date, avatar_url){
		var data = {memory: memory, date: date, avatar_url: avatar_url}
		vm.api.updatePost(postId,data).success(function(response){
			console.log(response)
			vm.post = response
			vm.editing = false
		})
	}

	vm.removePost = function(postId){
		vm.api.removePost(postId).success(function(response){
			console.log(response)
			$location.path('/posts')
		})
	}
}