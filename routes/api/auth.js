const express = require("express");
const router = express.Router();

const {schemas} = require("../../models/user");
const {authenticate, validateBody, uploadCloud} = require("../../middlewares");
const {
  register,
  login,
  getCurrent,
  logout,
  updateUser,
  updateThema,
  support,
  wakeUpServer,
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
router.get("/wakeupserver", wakeUpServer);

module.exports = router;
