var express = require('express')
var apiRouter = express.Router() //get an instance of express router
var albumsController = require('../controllers/albumsController')

var Album = require('../models/Album')


apiRouter.route('/albums')
	.get(albumsController.allAlbums)
	.post(albumsController.createAlbum)

apiRouter.route('/albums/:id')
	.get(albumsController.getOneAlbum)

module.exports = apiRouter