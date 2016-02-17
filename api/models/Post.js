var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema

var postSchema = new Schema({
	memory: String,
	date: Number,
	avatar_url : {type: String, required: true},
	userid: String
})

var Post = mongoose.model('Post', postSchema)

module.exports = Post