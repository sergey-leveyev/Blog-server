const { body } = require("express-validator");

const registerValidator = [
  body("email", "The username or password is incorrect").isEmail(),
  body("password", "The username or password is incorrect").isLength({
    min: 5,
  }),
  body("fullName", "Full Name must contain at least 3 characters").isLength({
    min: 3,
  }),
  body("avatarUrl", "URL is invalid").optional().isURL(),
];

module.exports = registerValidator;
