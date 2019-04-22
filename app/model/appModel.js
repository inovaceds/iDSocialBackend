"user strict";
var sql = require("../../db.js");

//Suscriber object constructor
var Suscriber = function(suscriber) {
  this.email = suscriber.email;
  this.date = new Date();
};

Suscriber.getAllSuscribers = function getAllSuscribers(result) {
  sql.query("Select * from suscribers", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("suscribers : ", res);
      result(null, res);
    }
  });
};

Suscriber.createSuscriber = function createSuscriber(newSuscriber, result) {
  sql.query("INSERT INTO suscribers set ?", newSuscriber, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res);
      result(null, res.insertId);
    }
  });
};

module.exports = Suscriber;
