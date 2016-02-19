var Post = require('../models/Post.js');

function getAllPosts(req,res){
	Post.find({}, function(err, posts){
		res.json(posts)	
	})
}

function createPost(req,res){
	console.log("inbackend" + JSON.stringify(req.body))
	var newPost = new Post
	newPost.memory = req.body.memory
	newPost.date = req.body.date
	newPost.avatar_url = req.body.avatar_url
	newPost.userid = req.decoded.userid
	newPost.userbio = req.decoded.bio
	newPost.username = req.decoded.name
	newPost.isPrivate = req.body.isPrivate
	if (req.body.albumid) newPost.albumid = req.body.albumid

	newPost.save(function(err, post){
		if(err) throw err
		res.json({message: "Post Saved!", post: post})
	})
}

function getOnePost(req,res){
	Post.findById(req.params.id, function(err,post){
		if(err) throw err
		res.json(post)
	})
}

function updatePost(req,res){
	console.log("updating post in back end")
	Post.findOneAndUpdate({_id: req.params.id}, req.body, function(err,post){
		if(err) throw err
		Post.findById(req.params.id, function(err,updatedPost){
			res.json(updatedPost)
		})
	})
}

function deletePost(req,res){
	Post.findOneAndRemove({_id: req.params.id}, req.body, function(err,post){
		if(err) throw err
		res.json({message:"post deleted!"})
	})
}


module.exports = {
	getAllPosts : getAllPosts,
	createPost : createPost,
	getOnePost : getOnePost,
	updatePost : updatePost,
	deletePost : deletePost

}