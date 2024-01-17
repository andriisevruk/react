const express = require('express')
const { getNotes, getNote, addNote, deleteNote } = require("../controllers/noteController")

const noteRouter = express.Router()
noteRouter.get("/", getNotes)
noteRouter.get("/:id", getNote)
noteRouter.post("/", addNote)
noteRouter.delete("/:id", deleteNote)

module.exports = noteRouter