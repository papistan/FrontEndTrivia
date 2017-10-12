var express = require("express");
var path = require("path");

// create the express app
var app = express();

// require bodyParser and configure it to read JSON
var bodyParser = require("body-parser");
app.use(bodyParser.json());

//: Allow CORS -- TODO: Need to not do this for production, but should be ok for POC.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// tell the express app to listen on port 3003
app.listen(3003, function() {
  console.log("listening on port 3003");
});
