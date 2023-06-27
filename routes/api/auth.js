const express = require("express");
const router = express.Router();

const {validateBody} = require("../../middlewares");

// const {authenticate, upload} = require("../../middlewares");
const {authenticate} = require("../../middlewares");

const {schemas} = require("../../models/user");
const {
  register,
  login,
  getCurrent,
  logout,
  updateUser,
  updateThema,
} = require("../../controller/auth");

router.post("/register", validateBody(schemas.registerSchema), register);

router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.put(
  "/user",
  authenticate,
  validateBody(schemas.updateSchema),
  // upload.single("avatar"),
  updateUser
);

router.patch(
  "/thema",
  authenticate,
  validateBody(schemas.themaSchema),
  updateThema
);

module.exports = router;
