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
	var newAlbum = new Album
	newAlbum.userid = req.decoded.userid

	newAlbum.save(function(err, album){
		if(err) throw err
		res.json({message: "Post Saved!", album: album})
	})
}

function getOneAlbum(req,res){
	Album.findById(req.params.id, function(err,album){
		if(err) throw err
		res.json(album)
	})
}