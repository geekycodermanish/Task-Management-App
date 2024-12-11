const { body } = require("express-validator");
const mongoose = require("mongoose");


const validateTask = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").optional().isString(),
  body("dueDate").optional().isISO8601().withMessage("Invalid date format"),
  body("priority")
    .optional()
    .isIn(["High", "Medium", "Low"])
    .withMessage("Priority must be low, medium, or high"),
];

const validateTaskUpdate = [
  body("title").optional().isString().withMessage("Title must be a string"),
  body("description").optional().isString(),
  body("status")
    .optional()
    .isIn(["pending", "in-progress", "completed"])
    .withMessage("Invalid status value"),
  body("dueDate").optional().isISO8601().withMessage("Invalid date format"),
];

module.exports = {validateTask, validateTaskUpdate};
