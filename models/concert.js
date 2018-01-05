const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ConcertSchema = new Schema({
	date: String,
	artist: String,
	venue: String,
	_id: Number
});

var Concert = mongoose.model('Concert', ConcertSchema);

module.exports = Concert;