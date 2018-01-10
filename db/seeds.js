var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOLAB_SILVER_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/personal-api");

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
		venue: 'Cervantes Masterpiece Ballroom'
	},
	{
		date: '2018-02-21',
		artist: 'Snarky Puppy',
		venue: 'Ogden Theatre'
	},
	{
		date: '2018-04-17',
		artist: 'Turnover',
		venue: 'Summit Music Hall'
	}
];
Concert.create(concerts, function(err, docs) {
	if (err) {
		console.log(err);
	}
	else {
		console.log(docs);
		mongoose.connection.close();
	}
});