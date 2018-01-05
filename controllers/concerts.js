var Concert = require('../models/concert');

var concertsController = {
	concerts: [
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
	],
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
		res.json({concerts: concertsController.concerts});
	},
	concerts_create: function(req, res) {
		var newConcert = {
			date: new Date(req.body.y, req.body.m, req.body.d, req.body.h),
			artist: req.body.a,
			venue: req.body.v,
			_id: concertsController.concerts[concertsController.concerts.length - 1]._id + 1
		}
		res.json(concertsController.concerts.push(newConcert));
	},
	concerts_read: function(req, res) {
	  res.json(concertsController.concerts.find(function(doc) {
	  	return (doc._id === Number(req.params.id));
	  }));
	},
	concerts_update: function(req, res) {
	  res.json({});
	},
	concerts_delete: function(req, res) {
	  res.json({});
	}
};

module.exports = concertsController;