// REQUIRING DEPENDENCIES
var User   = require("../models/user"),
    Letter = require("../models/letter");

var middlewareObject = {}; 

// FOR CHECKING IF USER IS LOGGED IN
middlewareObject.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    // ERROR MESSAGE
    req.flash("error", "You need to be logged in to do that!");
    // REDIRECT TO LOGIN PAGE
    res.redirect("/login");  
}

module.exports = middlewareObject;