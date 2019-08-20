const router = require("express").Router();
const userRoutes = require("./users");
const videoRoute = require("./rulesVideo")
// User routes
router.use("/users", userRoutes);
router.use("/video", videoRoute);

module.exports = router;
