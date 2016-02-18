var express = require('express')
var apiRouter = express.Router() //get an instance of express router
var usersController = require('../controllers/usersController')
var postsController = require('../controllers/postsController')
var albumsController = require('../controllers/albumsController')

var User = require('../models/User')


// Non-Authenticated routes ===========

//make a user
apiRouter.route('/users')
	.post(usersController.create)
	//works in postman

//login
apiRouter.route('/authenticate')
	.post(usersController.authenticate)

// Authenticated routes  ==============
//config middleware for auth
apiRouter.use(usersController.checkUser)

//users index
apiRouter.route('/users')
	.get(usersController.index)
	//works in postman

//logged in user detail
apiRouter.route('/me')
	.get(function(req, res){
		res.send(req.decoded)
	})

//user CRUD
apiRouter.route('/users/:user_id')
	.get(usersController.show) //works in postman
	.put(usersController.update) //works in postman
	.delete(usersController.destroy) // works in postman

//posts CRUD
apiRouter.route('/posts')
	.get(postsController.getAllPosts)
	.post(postsController.createPost)

apiRouter.route('/posts/:id')
	.get(postsController.getOnePost)
	.patch(postsController.updatePost)
	.delete(postsController.deletePost)

//albums crud
apiRouter.route('/albums')
	.get(albumsController.allAlbums)
	.post(albumsController.createAlbum)

apiRouter.route('/albums/:id')
	.get(albumsController.getOneAlbum)
	.put(albumsController.updateAlbum)
	.delete(albumsController.deleteAlbum)

module.exports = apiRouter


