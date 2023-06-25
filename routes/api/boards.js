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
    updateTasks,
} = require("../../controller/tasks");

const { authenticate } = require("../../middlewares");

const { schemas } = require("../../models/task");
const { validateBody, isValidId } = require("../../middlewares");

//приклад
// router.post("/", authenticate, validateBody(schemas.addTaskSchema), addTask);
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


module.exports = router;
