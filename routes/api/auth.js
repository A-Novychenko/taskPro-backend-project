const express = require("express");
const router = express.Router();
const {validateBody, authenticate} = require("../../middlewares");
// const {schemas} = require("../../models/user");
const {register, login, getCurrent, logout} = require("../../controller/auth");

//Приклад
// router.post("/register", validateBody(schemas.registerSchema), register);
// router.get("/current", authenticate, getCurrent);

module.exports = router;
