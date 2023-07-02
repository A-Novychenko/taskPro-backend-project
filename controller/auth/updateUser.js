const bcrypt = require("bcrypt");

const {cloudinary} = require("../../helpers");
const {User} = require("../../models/user");
const fs = require("fs/promises");

const updateUser = async (req, res) => {
  const {_id} = req.user;
  const {path} = req.file;

  const hashPassword = await bcrypt.hash(req.body.password, 10);

  const fileAvatar = await cloudinary.uploader.upload(path, {
    folder: "avatars",
    overwrite: true,
    use_filename: true,
    unique_filename: false,
  });
  await fs.unlink(path);

  const user = await User.findByIdAndUpdate(
    _id,
    {...req.body, password: hashPassword, avatarURL: fileAvatar.url},
    {new: true}
  );

  res.json({
    status: "OK",
    code: 200,

    user,
  });
};

module.exports = updateUser;
