"use strict";

var Suscriber = require("../model/appModel.js");

exports.list_all_suscribers = function(req, res) {
  Suscriber.getAllSuscribers(function(err, task) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", task);
    res.send(task);
  });
};
