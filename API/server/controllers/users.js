/****
  This file acts as a controller for the 'user' schema
****/

var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {
  index: function(req, res) {
    User.find({}, function(err, users) {
      if (err) {
        res.json(err);
      } else {
        res.json(users);
      }
    });
  },
  create: function(req, res) {
    var user = new User({
      //: TODO: What information is needed for user?
    });
    user.save(function(err) {
      if (err) {
        res.json(err);
      } else {
        //: TODO: What to do when user is successfully saved?
        res.redirect("/");
      }
    });
  },
  delete: function(req, res) {
    User.remove({ _id: req.params.id }, function(err) {
      if (err) {
        res.json(err);
      } else {
        //: TODO: What to do when user is successfully deleted?
        res.redirect("/");
      }
    });
  },
  show: function(req, res) {
    User.findOne({ _id: req.params.id }, function(err, user) {
      if (err) {
        res.json(err);
      } else {
        res.json(user);
      }
    });
  },
  update: function(req, res) {
    //: TODO: Change this based on what you want user to edit
    User.update(
      { _id: req.body._id },
      { $set: { username: req.body.username } },
      function(err) {
        if (err) {
          res.json(err);
        } else {
          //: TODO: What to do when update is successful?
          res.redirect("/");
        }
      }
    );
  }
};
