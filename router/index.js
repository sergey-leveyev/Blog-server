const Router = require("express").Router;
const UserController = require("../controllers/user.controller");

const router = new Router();

router.get("/login", UserController.login);

module.exports = router;
