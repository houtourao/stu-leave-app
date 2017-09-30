var express = require("express"),
    router = express.Router({mergeParams: true}),
    User = require("../models/user"),
    Middleware = require("../middleware");

// SHOW ROUTE
router.get("/:id", function (req, res) {
    if(res.locals.currentUser.role === "student"){
        User.findById(req.params.id).populate("letters").exec(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.render("student/show", { student: data });
            }
        });
    }
});

module.exports = router;