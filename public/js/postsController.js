angular
	.module('project4v2')
	.controller('PostsController', PostsController)

PostsController.$inject = ['postsFactory']

function PostsController (postsFactory){
	var vm = this;
	vm.api = postsFactory
	vm.posts = []
	vm.userid = {}
	vm.userinfo = vm.api.getuserinfo()
		.success(function(res){
			console.log("here is the res " + JSON.stringify(res))
			vm.userid = JSON.stringify(res[0]["_id"])
			console.log("here is the vm.userinfo " + vm.userinfo)
		})
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

