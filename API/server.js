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

//: Require mongoose config file which does the rest for us
require('./server/config/mongoose.js');

//: Store the function in a variable
var routes_setter = require('./server/config/routes.js');

//: Invoke the function stored in routes_setter and pass it the app variable
routes_setter(app);

// tell the express app to listen on port 3003
app.listen(3003, function() {
  console.log("listening on port 3003");
});
