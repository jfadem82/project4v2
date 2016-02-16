var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema

var postSchema = new Schema({
	photo: 
	make: String,
	year: Number,
	userid: String
})

var Post = mongoose.mode l('Post', postSchema)

module.exports = Post