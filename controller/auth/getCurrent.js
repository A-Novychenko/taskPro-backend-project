const getCurrent = async (req, res) => {
  const {token, name, email} = req.user;

  res.json({
    status: "OK",
    code: 200,
    token,
    user: {
      email,
      name,
    },
  });
};

module.exports = getCurrent;
