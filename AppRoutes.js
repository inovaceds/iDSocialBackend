"use strict";
module.exports = function(app) {
  var suscriberList = require("../controller/appController");

  // todoList Routes
  app
    .route("/suscribers")
    .get(suscriberList.list_all_suscribers)
};
