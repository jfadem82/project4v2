var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema
	var PostSchema = require('./Post.js').schema;

var albumSchema = new Schema({
	name: String,
	userid: String,
	posts: [PostSchema],
	avatar_url: String
})

var Album = mongoose.model('Album', albumSchema)

module.exports = Album