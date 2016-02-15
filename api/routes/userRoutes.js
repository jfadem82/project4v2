var express = require('express')
var apiRouter = express.Router() //get an instance of express router
var usersController = require('../controllers/usersController')
var postsController = require('../controllers/postsController')

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
	.put(usersController.update) //THIS SHIT DOESNT WORK, ASK ABOUT IT
	.delete(usersController.destroy) // works in postman

//cars CRUD
apiRouter.route('/posts')
	.get(postsController.getAllPosts)
	.post(postsController.createPost)

apiRouter.route('/posts/:id')
	.get(postsController.getOnePost)
	.patch(postsController.updatePost)
	.delete(postsController.deletePost)

module.exports = apiRouter