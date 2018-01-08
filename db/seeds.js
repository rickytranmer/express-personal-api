var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/personal-api');

// - Wipe db
var Concert = require('../models/concert');
Concert.remove({}, function(err) {
	if (err) document.log(err);
});

// - Seed db
var concerts = [
	{
		date: '2018-02-11',
		artist: 'Madlib',
		venue: 'Cervantes Masterpiece Ballroom',
		_id: 0
	},
	{
		date: '2018-02-21',
		artist: 'Snarky Puppy',
		venue: 'Ogden Theatre',
		_id: 1
	},
	{
		date: '2018-04-17',
		artist: 'Turnover',
		venue: 'Summit Music Hall',
		_id: 2
	}
];
Concert.create(reminders, function(err, docs) {
	if (err) {
		console.log(err);
	}
	else {
		console.log(docs);
		mongoose.connection.close();
	}
});