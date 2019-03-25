const router = require("express").Router();
const User = require("../../controllers/userControllers");

router.route("/")
  .get(User.findById)
  .post(User.create);

router
  .route("/:id")
  .get(User.findAll)
  .put(User.update)
  .delete(User.remove);

module.exports = router;
