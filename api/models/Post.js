var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema

var postSchema = new Schema({
	model: String,
	make: String,
	year: Number,
	avatar_url	: {type: String, require: true},
	userid: String
})

var Post = mongoose.model('Post', postSchema)

module.exports = Post