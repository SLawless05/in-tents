const router = require("express").Router();
const User = require("../../controllers/userControllers");
const db = require("../../models");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const passport = require("passport");
const { requireSignin, requireAuth } = require("../auth");
const axios = require("axios");
const express = require('express');

router
  .route("/profile")
  .post(User.create);

router
  .route("/profile/:id")
  .get(User.findOneById)
  .put(User.update)
  .delete(User.remove);

router
  .post("/profile/favorites", (req, res) => {
    const { email } = req.body;
    db.User.findOne({ email })
      .then(dbuser => {
      
      return res.status(200).json({
      message: dbuser.savedPlaces,
      user: dbuser.email
      });
    })
    .catch(err => {
      return next(err);
    });
  });
  



router.route("/search/:parkid").get(function(req, res) {
  var api_key = "NkBMV8ML8wzt4kc1GupeltXUV2R4bq5sllZv6eSy";
  var parkURL =
    "https://developer.nps.gov/api/v1/parks?parkCode=" +
    req.params.parkid +
    "&api_key=" +
    api_key;
  var alertURL =
    "https://developer.nps.gov/api/v1/alerts?parkCode=" +
    req.params.parkid +
    "&api_key=" +
    api_key;
  Promise.all([axios.get(parkURL), axios.get(alertURL)]).then(results => {

    const parks = results[0].data;
    const alerts = results[1].data;
    console.log(parks);
    console.log(alerts);
   
    const parkResults = {
      fullName: parks.data[0].fullName,
      weather: parks.data[0].weatherInfo,
      direction: parks.data[0].directionsInfo,
      description: parks.data[0].description,
      url: parks.data[0].url,
    };
     
    if(alerts.data.length !== 0){
      parkResults.alerts = alerts.data.map(alert => alert);
    }

    res.json({ parkResults });
  });
});

// *** passport code and routes *** -Lawless
function tokenizer(user) {
  return jwt.sign(
    {
      sub: user.id
    },
    config.secret
  );
}

router.get("/", function(req, res) {
  res.send("Welcome to the v1 routes!");
});

router.get("/protected", requireAuth, function(req, res) {
  res.send("You have been protected!");
});

router.post("/signin", requireSignin, function(req, res) {
  res.json({ token: tokenizer(req.user) });
});

router.post("/signup", function(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).send({ error: "You must provide an email and password" });
  }

  db.User.findOne({ email })
    .then(dbuser => {
      // if the user exists return an error
      if (dbuser) {
        return res.status(422).send({ error: "Email already in use" });
      }
      //create new user object
      const user = new db.User({ email, password });
      console.log(user);
      // save the user
      user.save().then(user => {
        // respond with the success if the user existed
        res.json({ token: tokenizer(user) });
      });
    })
    .catch(err => {
      return next(err);
    });
});

module.exports = router;
