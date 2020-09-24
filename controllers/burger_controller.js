var express = require("express");
var burger = require("../models/burger.js")

var router = express.Router()

router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerList = { burgers: data }
    res.render("index", burgerList);
  })
});

router.post("/burgers/create", function(req, res){
  burger.createBurger(req.body.burger_name, function() {
    res.redirect("/");
  });
});

router.post("/burgers/eaten/:id", function(req, res){
  burger.update(req.params.id, function() {
    res.redirect("/");
  });
});

module.exports = router;