const express = require("express");
const router = express.Router();

const { addTask } = require("../../controller/tasks");

const { authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");
const { validateBody, isValidId } = require("../../middlewares");

//приклад
router.post("/", authenticate, validateBody(schemas.addTaskSchema), addTask);

module.exports = router;
