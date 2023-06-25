const {User} = require("../../models/user");

const updateThema = async (req, res) => {
  const {thema} = req.body;
  const {_id} = req.user;

  await User.findByIdAndUpdate(_id, {thema});

  res.json({
    status: "OK",
    code: 200,

    thema,
  });
};

module.exports = updateThema;
