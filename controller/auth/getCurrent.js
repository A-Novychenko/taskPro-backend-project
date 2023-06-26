const getCurrent = async (req, res) => {
  const {token, name, email, thema, avatarURL} = req.user;

  res.json({
    status: "OK",
    code: 200,
    token,
    user: {
      email,
      name,
      thema,
      avatarURL,
    },
  });
};

module.exports = getCurrent;
