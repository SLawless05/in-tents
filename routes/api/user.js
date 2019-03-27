const router = require("express").Router();
const User = require("../../controllers/userControllers");

router.route("/profile")
  .post(User.create);
router.route("/profile/:id")
  .get(User.findOneById)
  .put(User.update);
  router
  .route("/profile/favorites/:id")
  .delete(User.remove);

module.exports = router;
