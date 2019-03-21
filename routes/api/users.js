const router = require("express").Router();
const users = require("../../config/connection");

// Matches with "/api/books"
router.route("/")
  .get(users.findAll)
  .post(users.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(users.findById)
  .put(users.update)
  .delete(users.remove);

module.exports = router;
