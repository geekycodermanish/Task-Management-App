const express = require("express");
const router = express.Router();
const { getAllTasks, createTask, getTaskById, updateTask, deleteTask } = require("../controllers/taskController");
const {validateTask, validateTaskUpdate} = require("../middleware/validation");

router.get("/", getAllTasks);
router.post("/", validateTask, createTask);
router.get("/:id", getTaskById);
router.put("/:id", validateTaskUpdate, updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
