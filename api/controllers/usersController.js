// USERS CONTROLLER - HERE BE FOUND USER CRUD AND AUTH

var User = require('../models/User'),
	jwt = require('jsonwebtoken'),
	mySpecialSecret = "sausage";


function index(req, res){
	// get all the users -- index
	User.find(function(err, users){
		if(err) res.send(err)
		res.json(users)
	})
}

function create(req, res){
	// make a single user -- create
	console.log("Creating a user")
	var user = new User()

	user.email = req.body.email
	user.password = req.body.password
	user.name = req.body.name
	user.bio = req.body.bio
	
	console.log("req is " + req)
	console.log("user is " + user)
	console.log("email is " + user.email)
	user.save(function(err){
		if(err){ console.log("this error is " + err)
			if(err.code == 11000){ console.log("nested if")
				return res.json({success: false, message: "An Account is already associated with that email" })
			} else {
				res.send(err)
			}
		}
		res.json({success: true, message: "Nah, Brah"})
	})
}

function show(req, res){
	//get a single user -- show
	User.findById(req.params.user_id, function(err, user){
		if(err) res.send(err)
		res.json(user)
	})
}

function update(req, res){
	// update a single user -- update
	User.findById(req.params.user_id, function(err, user){
		if(err) res.send(err)

		if(req.body.name) user.name = req.body.name
		if(req.body.email) user.email = req.body.email
		if(req.body.password) user.password = req.body.password
		if(req.body.bio) user.bio = req.body.bio

		user.save(function(err){
			if(err) res.send(err)
			res.json({success: true, message: "you got updated, Brah"})
		})
	})
}

function destroy(req, res){
	// delete a single user -- destroy
	User.remove({
		_id: req.params.user_id
	}, function(err, user){
		if(err) res.send(err)
		res.json({success: true, message: "Beat feet. You're done."})
	})
}


//code for apiRouter.route('/authenticate')
function authenticateUser(req, res) {
	console.log('trying to generate a JWT')
	// 1 - find the user in our db
	User.findOne({
		email: req.body.email
	}).select('name email password bio').exec(function(err, user){
		if(err) throw err
		if(!user){
			res.json({success: false, message: "No such user, Brah."})
		} else if(user){
			// check passwords
			var validPassword = user.comparePassword(req.body.password)
			if(!validPassword){
				res.json({success: false, message: "Invalid password, Brah."})
			} else {
				console.log(user.bio)
				console.log(user.name)
				// password is good!
				var token = jwt.sign({
					name: user.name,
					email: user.email,
					userid: user._id,
					bio: user.bio
				}, mySpecialSecret, {
					expiresInMinutes: 1440
				})
				// now let's actually give it to them!
				console.log("logged in")
				res.json({ success: true, message: "You're token up!", token: token})
			}
		}
	})
}

function checkUser(req, res, next){
	// let's check everywhere for the JWT!
	var token = req.body.token || req.param('token') || req.headers['x-access-token']
	// if we find the token, let's use mySpecialSecret to try and decode it.
	if(token){
		jwt.verify(token, mySpecialSecret, function(err, decoded){
			if(err){
				res.status(403).send({success: false, message: "Nah, that token is lookin' funny homie"})
			} else {
				req.decoded = decoded
				next()
			}
		})
	} else {
		res.status(403).send({success: false, message: "Brah, where's your token at? Nothing is free."})
	}
	// this is going to run EVERY time our API is hit
	// we want to check if the user is logged in here
	console.log("checking if user is logged in")
}

module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy,
	authenticate: authenticateUser,
	checkUser: checkUser
}




