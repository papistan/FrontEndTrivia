/****
  This file configures all the routes for CRUD operations.
****/

//: Controllers to use
var users = require("../controllers/users.js");

//: Routes for CRUD
module.exports = function(app) {
  //: GET all users
  app.get("/users", function(req, res) {
    users.index(req, res);
  });
  //: GET one user
  app.get("/user/:id", function(req, res) {
    users.show(req, res);
  });
  //: POST to create new user
  app.post("/user", function(req, res) {
    users.create(req, res);
  });
  //: Update a user
  app.put("/user/:id", function(req, res) {
    users.update(req, res);
  });
  //: Delete a user
  app.delete("/user/:id", function(req, res) {
    users.delete(req, res);
  });
};
