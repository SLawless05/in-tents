const passport = require("passport");
const requireSignin = function(req, res, next) {
  passport.authenticate("local", { session: false }, function(err, user, info) {
    if (err) return res.status(500).end();
    if (!user) return res.status(401).send(info.message);
    next();
  })(req, res, next);
};

const requireAuth = function(req, res, next) {
  passport.authenticate("jwt", { session: false }, function(err, user) {
    if (err) return res.status(500).end();
    if (!user) return res.status(401).json({message: "Invalid Token"});
    next();
  })(req, res, next);
};

module.exports = {
  requireSignin,
  requireAuth
}
