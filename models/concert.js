const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ConcertSchema = new Schema({
	artist: String,
	date: Date,
	venue: String,
	openers: [String]
});

var Concert = mongoose.model('Concert', ConcertSchema);

module.exports = Concert;