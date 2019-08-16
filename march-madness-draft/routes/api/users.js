const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/Bracket").get(usersController.displayAll);

// // Matches with "/api/user/:id"
router
.route("/:id")
.get(userController.findById)
.put(userController.update)

module.exports = router;
