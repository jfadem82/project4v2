var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema

var albumSchema = new Schema({
	name: String,
	userid: String
})

var Album = mongoose.model('Album', albumSchema)

module.exports = Album