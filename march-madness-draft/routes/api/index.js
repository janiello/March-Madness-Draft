const router = require("express").Router();
const userRoutes = require("./users");
const articlesRoute = require("./articles")
// User routes
router.use("/users", userRoutes);
router.use("/articles", articlesRoute);

module.exports = router;
