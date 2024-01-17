const express = require('express')
const { getList, getTask, addTask, deleteTask, updateTaskStatus } = require("../controllers/todoListController")

const todoListRouter = express.Router()
todoListRouter.get("/", getList)
todoListRouter.get("/:id", getTask)
todoListRouter.post("/", addTask)
todoListRouter.delete("/:id", deleteTask)
todoListRouter.put("/:id", updateTaskStatus);

module.exports = todoListRouter