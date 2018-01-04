const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ConcertSchema = new Schema({
	artist: String,
	date: Date,
	openers: [String]
});

var Concert = mongoose.model('Concert', ConcertSchema);

module.exports = Concert;