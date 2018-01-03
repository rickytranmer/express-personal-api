// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/rickytranmer/express-personal-api/blob/master/README.md",
    base_url: "https://floating-peak-40180.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "DDisplays: name, github_link, github_profile_image, current_city, pets {Displays: name, type, breed"},
      {method: "GET", path: "/api/concerts", description: "Index of all concerts"},
      {method: "GET", path: "/api/concerts/:id", description: "Show individual concert"},
      {method: "POST", path: "/api/concerts", description: "Create a new concert"},
      {method: "PUT", path: "/api/concerts/:id", description: "Update individual concert"}, 
      {method: "DELETE", path: "/api/concerts/:id", description: "Delete individual concert"}
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
