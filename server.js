// require express and other modules
var express = require('express');
var app = express();
var concertsController = require('./controllers/concerts');

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

app.get('/api', concertsController.api_index);
app.get('/api/profile', concertsController.profile_display);
app.get('/api/concerts', concertsController.concerts_index);
app.post('/api/concerts', concertsController.concerts_create);
app.get('/api/concerts/:id', concertsController.concerts_read);
app.put('/api/concerts/:id', concertsController.concerts_update);
app.delete('/api/concerts/:id', concertsController.concerts_delete);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});



	//PROJECT 2//
/****************
 * REQUIREMENTS *
 ****************/

 //TODO - Have at least 2 models (more if they make sense) – one representing someone using your application, and one that represents the main functional idea for your app
 //TODO - Have at least 2 software unit tests using Mocha and Chai
 //TODO - Interface with a 3rd Party Web API of your choosing
 	// Google Maps?  Imgur?
 //TODO - Include sign up/log in functionality, with encrypted passwords & an authorization flow
 //TODO - Have complete RESTful routes for at least one of your resources with GET, POST, PUT, and DELETE
 //TODO - Utilize Mongo to create a database structure and interact with your JSON-like data
 //TODO - Include wireframes that you designed during the planning process
 //TODO - Have semantically clean HTML and CSS
 // - Be deployed online and accessible to the public
