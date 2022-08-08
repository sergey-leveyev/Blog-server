const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const { UserModel } = require("../models/user.model");

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  const token = jwt.sign({ email }, process.env.secretKey);

  res.json({
    fucku: true,
    token,
  });
};

module.exports.registration = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  const doc = new UserModel({
    email: req.body.email,
    fullName: req.body.fullName,
    avatarUrl: req.body.avatarUrl,
    passwordHash: req.body.password,
  });

  res.json({
    success: true,
  });
};
