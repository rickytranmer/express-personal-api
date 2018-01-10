var mongo = require('mongodb').MongoClient;
var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOLAB_SILVER_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/personal-api");

module.exports.concert = require("./concert.js");
