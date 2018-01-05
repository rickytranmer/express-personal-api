var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/personal-api");

process.on('exit', function() { mongoose.disconnect(); });

module.exports.Concert = require("./concert.js");
