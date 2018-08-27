const express = require("express")
const router = express.Router();
const burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers/create", function(req, res) {
    burgers.create('burger_name', [req.body.name], function () {
		res.redirect('/api/burgers');

  
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    burgers.update('devoured',req.body.devoured,condition, function () {
        res.redirect('/burgers');
    })
});
  
  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
    
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  

  module.exports = router;
  