const bcrypt = require("bcrypt");

const { User } = require("../../models/user");

const updateUser = async (req, res) => {
  const { password } = req.body;

  const { _id, password: oldPass } = req.user;

  const newPassword = password ? await bcrypt.hash(password, 10) : oldPass;

  const user = await User.findByIdAndUpdate(
    _id,
    { ...req.body, password: newPassword },
    { new: true }
  );

  res.json({
    status: "OK",
    code: 200,

    user,
  });
};

module.exports = updateUser;
