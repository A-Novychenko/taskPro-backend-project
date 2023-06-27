const {User} = require("../../models/user");

const updateUser = async (req, res) => {
  const {_id} = req.user;

  const user = await User.findByIdAndUpdate(_id, {...req.body}, {new: true});

  res.json({
    status: "OK",
    code: 200,

    user,
  });
};

module.exports = updateUser;
