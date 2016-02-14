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
		vm.api.show(postId).success(function(response){
			vm.post = response
			console.log(response)
		})
	}
	vm.showPost($stateParams.postId)

	vm.updatePost = function(postId, make, model, year){
		var data = {make: make, model: model, year: year}
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