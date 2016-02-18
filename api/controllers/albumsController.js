var User = require('../models/User'),
	Album = require('../models/Album'),
	jwt = require('jsonwebtoken'),
	mySpecialSecret = "sausage";

function allAlbums(req,res){
	Album.find({}, function(err, albums){
		res.json(albums)	
	})
}

function createAlbum(req,res){
	console.log("running createAlbum in back end controller")
	var newAlbum = new Album
	newAlbum.name = req.body.name
	newAlbum.userid = req.decoded.userid
	newAlbum.avatar_url = req.body.avatar_url

	newAlbum.save(function(err, album){
		if(err) throw err
		res.json({message: "Album Saved!", album: album})
	})
}

function getOneAlbum(req,res){
	Album.findById(req.params.id, function(err,album){
		if(err) throw err
		res.json(album)
	})
}

function updateAlbum(req,res){
	Album.findOneAndUpdate({_id: req.params._id}, req.body, function(err,album){
		if(err) throw err
		Album.findById(req.params.id, function(err,updatedAlbum){
			res.json({message: "Album updated!"})
			res.json(updatedAlbum)
		})
	})
}
//

module.exports = {
	allAlbums : allAlbums,
	createAlbum : createAlbum,
	getOneAlbum : getOneAlbum,
	updateAlbum : updateAlbum
}