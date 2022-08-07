const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  const token = jwt.sign({ email }, process.env.secretKey);

  res.json({
    fucku: true,
    token,
  });
};
