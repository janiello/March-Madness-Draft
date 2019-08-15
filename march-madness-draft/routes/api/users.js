const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/Bracket").get(usersController.displayAll);

module.exports = router;