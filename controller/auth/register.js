// const { controllerWrapper } = require("../../helpers");
const bcrypt = require("bcrypt");

const { HttpError } = require("../../helpers");

const { User } = require("../../models/user");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const result = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({
    name: result.name,
    email: result.email,
  });
};

module.exports = register;
