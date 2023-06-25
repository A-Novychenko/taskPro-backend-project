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

const { authenticate } = require("../../middlewares");

const { schemas } = require("../../models/task");
const { validateBody, isValidId } = require("../../middlewares");

router.get("/", authenticate, getAllBoards);
router.post("/", authenticate, validateBody(schemas.boardJoiSchema), addBoard);
router.put("/:boardId", authenticate, validateBody(schemas.boardJoiSchema), updateBoard);
router.delete("/:boardId", authenticate, deleteBoard);

router.get("/:boardId/columns", authenticate, getColumns);
router.post("/:boardId/columns", authenticate, validateBody(schemas.columnJoiSchema), addColumn);
router.put("/:boardId/columns/:columnId", authenticate, validateBody(schemas.columnJoiSchema), updateColumn);
router.delete("/:boardId/columns/:columnId", authenticate, deleteColumn);

router.get("/:boardId/columns/:columnId/tasks", authenticate, getTasks);
router.post("/:boardId/columns/:columnId/tasks", authenticate, validateBody(schemas.taskJoiSchema), addTask);
router.put("/:boardId/columns/:columnId/tasks/:taskId", authenticate, validateBody(schemas.taskJoiSchema), updateTask);
router.delete("/:boardId/columns/:columnId/tasks/:taskId", authenticate, deleteTask);


module.exports = router;
