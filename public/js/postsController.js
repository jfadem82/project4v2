angular
	.module('project4v2')
	.controller('PostsController', PostsController)

PostsController.$inject = ['postsFactory', '$window']

function PostsController (postsFactory, $window){
	var vm = this;
	console.log("posts controller")
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
	



	vm.addPost = function(make,model,year, avatar_url){
			
		var data = {make:make, model:model, year:year, avatar_url:avatar_url}
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


	vm.sthree = function(){

		 /*
      		Function to carry out the actual PUT request to S3 using the signed request from the app.
  		*/
		function upload_file(file, signed_request, url){
			console.log(file)
			var xhr = new XMLHttpRequest();
			xhr.open("PUT", signed_request);
			xhr.setRequestHeader('x-amz-acl', 'public-read');
			xhr.onload = function() {
			  if (xhr.status === 200) {
			      document.getElementById("preview").src = url;            
			      document.getElementById("avatar_url").value = url;
			  }
			};
		  xhr.onerror = function() {
		      console.log("in error")
		      alert("Could not upload file."); 
		  };
		  xhr.send(file);
		}

		/*
		  Function to get the temporary signed request from the app.
		  If request successful, continue to upload the file using this signed
		  request.
		*/
		function get_signed_request(file){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost:3000/sign_s3?file_name="+file.name+"&file_type="+file.type);
		xhr.onreadystatechange = function(){
		  if(xhr.readyState === 4){
		    if(xhr.status === 200){
		      var response = JSON.parse(xhr.responseText);
		      upload_file(file, response.signed_request, response.url);
		    }
		    else{
		      alert("Could not get signed URL.");
		    }
		  }
		};
		xhr.send();
		}

		/*
		 Function called when file input updated. If there is a file selected, then
		 start upload procedure by asking for a signed request from the app.
		*/
		function init_upload(){
		console.log("here");
		var files = document.getElementById("file_input").files;
		var file = files[0];
		if(file == null){
		  alert("No file selected.");
		  return;
		}
		get_signed_request(file);
		}

		/*
		 Bind listeners when the page loads.
		*/






		(function() {
		    	window.document.querySelector("#file_input").addEventListener('change', init_upload)
		})();

	}

}

