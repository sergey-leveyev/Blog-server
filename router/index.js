const Router = require("express").Router;

const UserController = require("../controllers/user.controller");
const registerValidator = require("../validations/auth.validation");

const router = new Router();

router.get("/login", UserController.login);
router.post("/registration", registerValidator, UserController.registration);

module.exports = router;
