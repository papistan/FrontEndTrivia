/****
  The 'user' schema

  Helpful Documentation: http://mongoosejs.com/docs/schematypes.html
****/

var mongoose = require("mongoose");

//: Define the information that you want to store for a user.
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"]
  }
});

//: Register the schema as a model
var User = mongoose.model("User", UserSchema);
