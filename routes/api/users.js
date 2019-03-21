const router = require("express").Router();
const users = require("../../config/connection");

// Matches with "/api/books"
router.route("/")
  .get(users.findById)
  .post(users.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(users.findAll)
  .put(users.update)
  .delete(users.remove);

module.exports = router;
