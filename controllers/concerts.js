var Concert = require('../models/concert');

function api_index(req, res) {
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
}
function profile_display(req, res) {
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
}
function concerts_index(req, res) {
	db.Concert.find(function(err, doc) {
		err ? console.log('concerts_index error') : res.json(doc);
	});
},
function concerts_create(req, res) {
	var newConcert = {
		date: req.body.y + '-' + req.body.m + '-' + req.body.d,
		artist: req.body.a,
		venue: req.body.v
	}
	db.Concert.create(newConcert, function(err, doc) {
		err ? console.log('concerts_create error') : res.json(doc);
	});
}
function concerts_read(req, res) {
	res.json(db.Concert.find(function(doc) {
	 	return (doc._id === Number(req.params.id));
	}));
},
function concerts_update(req, res) {
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
function concerts_delete(req, res) {
	db.Concert.remove({_id: Number(req.params.id)}, function(err, doc) {
		err ? console.log('concerts_delete error') : res.json(doc);
	});
}

module.exports = {
	api_index: api_index,
	profile_display: profile_display,
	concerts_index: concerts_index,
	concerts_create: concerts_create,
	concerts_read: concerts_read,
	concerts_update: concerts_update,
	concerts_delete: concerts_delete
};