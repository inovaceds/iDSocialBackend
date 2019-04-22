"use strict";

var Suscriber = require("../model/appModel.js");

exports.list_all_suscribers = function(req, res) {
  Suscriber.getAllSuscribers(function(err, suscriber) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", suscriber);
    res.send(suscriber);
  });
};

exports.create_suscriber = function(req, res) {
  var new_suscriber = new Suscriber(req.body);
  console.log(req.body)
  //handles null error
  if (!new_suscriber.email) {
    res
      .status(400)
      .send({ error: true, message: "Please provide email" });
  } else {
    Suscriber.createSuscriber(new_suscriber, function(err, suscriber) {
      if (err) res.send(err);
      res.json(suscriber);
    });
  }
};
