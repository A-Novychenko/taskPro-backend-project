const express = require("express");
const router = express.Router();

const { validateBody } = require("../../middlewares");

const { authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");
const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
} = require("../../controller/auth");

router.post("/register", validateBody(schemas.registerSchema), register);

router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.post("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
