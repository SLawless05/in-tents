const router = require("express").Router();
const User = require("../../controllers/userControllers");
const db = require("../../models");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const passport = require("passport");
const requireSignin = passport.authenticate("local", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });
const axios = require("axios");

router.route("/profile").post(User.create);
router
  .route("/profile/:id")
  .get(User.findOneById)
  .put(User.update);

router.route("/profile/favorites/:id").delete(User.remove);

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
  Promise.all([axios.get(parkURL), axios.get(alertURL)]).then(results =>{

    const parks = {
      fullname: data.parks.data[0].fullname,
      weather: data.parks.data[0].weatherinfo,
      direction: data.parks.data[0].directionsinfo,
    }
    if(data.alerts.data === []){
      console.log("nothing to show")
    }else{
      // console.log(data.alerts.data[0].title);
      // console.log(data.alerts.data[1].title);
      results[1].data.map(alert => alert.title);
      
    }

    res.json({ parks: results[0].data, alerts: results[1].data })
  });
});

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