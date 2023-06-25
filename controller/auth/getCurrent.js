const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const getCurrent = async (req, res) => {
  const { user } = req.body;
  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

  res.json({
    status: "OK",
    code: 200,
    token,
    user: {
      email: user.email,
      name: user.name,
    },
  });
};

module.exports = getCurrent;
