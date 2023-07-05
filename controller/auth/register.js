const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {HttpError} = require("../../helpers");
const {User} = require("../../models/user");

const {SECRET_KEY} = process.env;

const register = async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
  });

  const {_id: id} = newUser;
  const payload = {
    id,
  };
  const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});

  await User.findByIdAndUpdate(id, {token});

  res.status(201).json({
    status: "created",
    code: 201,
    token,

    user: {
      name: newUser.name,
      email: newUser.email,
      thema: newUser.thema,
    },
  });
};

module.exports = register;
