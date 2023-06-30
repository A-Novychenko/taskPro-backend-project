const express = require("express");
const router = express.Router();

const {
  getAllBoards,
  addBoard,
  updateBoard,
  deleteBoard,
  getColumns,
  addColumn,
  updateColumn,
  deleteColumn,
  getTasks,
  addTask,
  deleteTask,
  updateTask,
} = require("../../controller/tasks");

const {authenticate} = require("../../middlewares");

const {schemas} = require("../../models/task");
const {validateBody, isValidId} = require("../../middlewares");

router.get("/", authenticate, getAllBoards);
router.post("/", authenticate, validateBody(schemas.boardJoiSchema), addBoard);
router.put(
  "/:boardId",
  authenticate,
  isValidId,
  validateBody(schemas.boardJoiSchema),
  updateBoard
);
router.delete("/:boardId", authenticate, isValidId, deleteBoard);

router.get("/:boardId/columns", authenticate, isValidId, getColumns);
router.post(
  "/:boardId/columns",
  authenticate,
  isValidId,
  validateBody(schemas.columnJoiSchema),
  addColumn
);
router.put(
  "/:boardId/columns/:columnId",
  authenticate,
  isValidId,
  validateBody(schemas.columnJoiSchema),
  updateColumn
);
router.delete(
  "/:boardId/columns/:columnId",
  authenticate,
  isValidId,
  deleteColumn
);

router.get(
  "/:boardId/columns/:columnId/tasks",
  authenticate,
  isValidId,
  getTasks
);
router.post(
  "/:boardId/columns/:columnId/tasks",
  authenticate,
  isValidId,
  validateBody(schemas.taskJoiSchema),
  addTask
);
router.put(
  "/:boardId/columns/:columnId/tasks/:taskId",
  authenticate,
  isValidId,
  validateBody(schemas.taskJoiSchema),
  updateTask
);
router.delete(
  "/:boardId/columns/:columnId/tasks/:taskId",
  authenticate,
  isValidId,
  deleteTask
);

module.exports = router;
