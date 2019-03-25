const router = require("express").Router();
const User = require("../../controllers/userControllers");

router.route("/profile")
  .get(User.findById)
  .post(User.create);
router
  .route("/profile/favorites/")
  .get(User.findAll)
  .put(User.update);
router
  .route("/profile/favorites/:id")
  .delete(User.remove);

module.exports = router;
