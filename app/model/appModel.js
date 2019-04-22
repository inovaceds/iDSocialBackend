"user strict";
var sql = require("../../db.js");

//Task object constructor
var Suscriber = function(suscriber) {
  this.suscriber = suscriber.suscriber;
  this.status = suscriber.status;
  this.created_at = new Date();
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

module.exports = Suscriber;
