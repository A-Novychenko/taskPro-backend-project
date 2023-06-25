// const fs = require("fs/promises");
// const path = require("path");
const bcrypt = require("bcrypt");

const { User } = require("../../models/user");

// const avatarsDir = path.join(__dirname, "../", "public", "avatars");

const updateUser = async (req, res) => {
  const { name, email, password } = req.body;

  const { _id, token } = req.user;

  const updateObj = {};

  if (name) {
    updateObj.name = name;
  } else {
    updateObj.name = req.user.name;
  }
  if (email) {
    updateObj.email = email;
  } else {
    updateObj.email = req.user.email;
  }
  if (password) {
    const hashPassword = await bcrypt.hash(password, 10);
    updateObj.password = hashPassword;
  } else {
    const hashPassword = await bcrypt.hash(req.user.password, 10);

    updateObj.password = hashPassword;
  }

  await User.findByIdAndUpdate(_id, updateObj);

  // const { path: tempUpload, filename } = req.file;
  // const avatarName = `${_id}_${filename}`;
  // const resultUpload = path.join(avatarsDir, avatarName);

  // await fs.rename(tempUpload, resultUpload);

  // const avatarURL = path.join("avatars", avatarName);
  // const avatarURL = path.join("avatars", avatarName);

  // await User.findByIdAndUpdate(_id, { avatarURL });

  // res.json({ avatarURL });

  res.json({
    status: "OK",
    code: 200,
    token,
    user: {
      email: email,
      name: name,
    },
  });
};

module.exports = updateUser;
