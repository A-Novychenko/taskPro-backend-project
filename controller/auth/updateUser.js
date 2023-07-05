const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;

const {User} = require("../../models/user");

const updateUser = async (req, res) => {
  const {_id} = req.user;
  const {password} = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.findById(_id);

  let avatarURL = user.avatarURL;
  if (req.file) {
    if (avatarURL !== "") {
      const urlSliced = avatarURL.slice(62, avatarURL.length - 4);
      await cloudinary.uploader.destroy(urlSliced, {
        invalidate: true,
        resource_type: "image",
      });
    }
    avatarURL = req.file.path;
  }

  const result = await User.findByIdAndUpdate(
    _id,
    {...req.body, avatarURL, password: hashPassword},
    {new: true}
  );

  res.json({
    status: "OK",
    code: 200,

    user: result,
  });
};

module.exports = updateUser;
