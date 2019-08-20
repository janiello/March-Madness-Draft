const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const userController = require("../../controllers/userController")

router.route("/Bracket").get(usersController.displayAll);

router.route("/")
.get(userController.findAll);

// Matches with "/api/user/:id "
router
.route("/:id")
.get(userController.findById)
.post(userController.update);
module.exports = router;
