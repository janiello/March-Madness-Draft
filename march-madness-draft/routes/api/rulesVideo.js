const router = require("express").Router();
const videoController = require("../../controllers/rulesVideo")

router
.route("/")
.get(videoController.findVideo);

module.exports = router;