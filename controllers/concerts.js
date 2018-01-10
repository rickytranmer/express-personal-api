var Concert = require('../models/concert');

var concertsController = {
	api_index: function(req, res) {
	  //  all api endpoints
		res.json({
		    message: "Welcome to my personal api! Here's what you need to know!",
		    documentation_url: "https://github.com/rickytranmer/express-personal-api/blob/master/README.md",
		    base_url: "https://floating-peak-40180.herokuapp.com",
		    endpoints: [
		      {method: "GET", path: "/api", description: "Describes all available endpoints"},
		      {method: "GET", path: "/api/profile", description: "Displays: name, github_link, github_profile_image, current_city, pets {Displays: name, type, breed"},
		      {method: "GET", path: "/api/concerts", description: "Index of all concerts"},
		      {method: "POST", path: "/api/concerts", description: "Create a new concert"},
		      {method: "GET", path: "/api/concerts/:id", description: "Show individual concert"},
		      {method: "PUT", path: "/api/concerts/:id", description: "Update individual concert"}, 
		      {method: "DELETE", path: "/api/concerts/:id", description: "Delete individual concert"}
	    	]
  		});
	},
	profile_display: function(req, res) {
	  res.json({
	    message: "Welcome to my profile.  Here's some info and links!",
	    name: "Ricky Tranmer",
	    github_link: "https://github.com/rickytranmer",
	    github_profile_image: "https://avatars2.githubusercontent.com/u/21313782?s=400&u=a04dc51550751d3c0062cad75094dbfed0dc1541&v=4",
	    current_city: "Denver",
	    pets: [{
	      name: "Biko",
	      type: "Dog",
	      breed: "Golden Retriever"
	    }]
	  })
	},
	concerts_index: function(req, res) {
		db.Concert.find(function(err, doc) {
			err ? console.log('concerts_index error') : res.json(doc);
		});
	},
	concerts_create: function(req, res) {
		var newConcert = {
			date: req.body.y + '-' + req.body.m + '-' + req.body.d,
			artist: req.body.a,
			venue: req.body.v
		}
		db.Concert.create(newConcert, function(err, doc) {
			err ? console.log('concerts_create error') : res.json(doc);
		});
	},
	concerts_read: function(req, res) {
		res.json(db.Concert.find(function(doc) {
		 	return (doc._id === Number(req.params.id));
		}));
	},
	concerts_update: function(req, res) {
		var updateConcert = db.Concert.find(function(doc) {
		 	return (doc._id === Number(req.params.id));
		});
		updateConcert.date = req.body.y + '-' + req.body.m + '-' + req.body.d;
		updateConcert.artist = req.body.a;
		updateConcert.venue = req.body.v;
		db.Concert.update({_id: Number(req.params.id)}, updateConcert, function(err, newDoc) {
			err ? console.log('concerts_update error') : res.json(newDoc);
		});
	},
	concerts_delete: function(req, res) {
		db.Concert.remove({_id: Number(req.params.id)}, function(err, doc) {
			err ? console.log('concerts_delete error') : res.json(doc);
		});
	}
};

module.exports = concertsController;