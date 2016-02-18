var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema

var postSchema = new Schema({
	memory: String,
	date: Number,
	avatar_url : String,
	userid: String,
	isPrivate: Boolean

})

var Post = mongoose.model('Post', postSchema)

module.exports = Post