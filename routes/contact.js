var express = require("express");
var router = express.Router();

// GET Contact page
router.get("/", function (req, res, next) {
  res.render("contact", {
    title: "Contact Us",
    message: "Feel free to reach out to us anytime!",
  });
});

module.exports = router;
