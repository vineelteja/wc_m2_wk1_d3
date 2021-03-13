const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();

router.get("/", function (req, res) {
  // res.send("It works!")
  // res.render('form')
  res.render("form", { title: "Registration form" });
});

router.post(
  "/",

  [
    check("name").isLength({ min: 1 }).withMessage("Please enter a name"),
    check("email").isLength({ min: 1 }).withMessage("please enter an email"),
  ],

  function (req, res) {
    // console.log(req.body)
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      res.send("thank you for registering ");
    } else {
      res.render("form", {
        title: "Registration form",
        errors: errors.array(),
        data: req.body,
      });
    }
    // res.render("form", {title: 'Registration form'})
  }
);

module.exports = router;
