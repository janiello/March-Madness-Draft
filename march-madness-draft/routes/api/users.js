const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const userController = require("../../controllers/userController")

router.route("/Bracket").get(usersController.displayAll);

router.route("/")
.get(userController.findAll);

// Matches with "/api/user/:id on localhost:3001"
router
.route("/:id")
.get(userController.findById)
.put(userController.update);
module.exports = router;
