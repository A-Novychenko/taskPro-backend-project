const bcrypt = require("bcrypt");

const gravatar = require("gravatar");

const {HttpError} = require("../../helpers");

const {User} = require("../../models/user");

const register = async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if (user) {
    throw HttpError(409, "Email already in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    status: "created",
    code: 201,

    user: {
      name: newUser.name,
      email: newUser.email,
    },
  });
};

module.exports = register;
