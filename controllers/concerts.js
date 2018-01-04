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
		      {method: "GET", path: "/api/profile", description: "DDisplays: name, github_link, github_profile_image, current_city, pets {Displays: name, type, breed"},
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
	  res.json({});
	},
	concerts_create: function(req, res) {
	  res.json({});
	},
	concerts_read: function(req, res) {
	  res.json({});
	},
	concerts_update: function(req, res) {
	  res.json({});
	},
	concerts_delete: function(req, res) {
	  res.json({});
	}
};

module.exports = concertsController;