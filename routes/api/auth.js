const express = require("express");
const router = express.Router();

const {authenticate, validateBody, uploadCloud} = require("../../middlewares");

const {schemas} = require("../../models/user");
const {
  register,
  login,
  getCurrent,
  logout,
  updateUser,
  updateThema,
  support,
} = require("../../controller/auth");

router.post("/register", validateBody(schemas.registerSchema), register);

router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.put(
  "/user",
  authenticate,
  uploadCloud.single("avatarURL"),
  validateBody(schemas.updateSchema),
  updateUser
);

router.patch(
  "/thema",
  authenticate,
  validateBody(schemas.themaSchema),
  updateThema
);

router.post(
  "/support",
  authenticate,
  validateBody(schemas.supportSchema),
  support
);

module.exports = router;
