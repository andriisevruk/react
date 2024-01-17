const Note = require("../models/note")

// actions
exports.getNotes = async (req, res) => {
  const notes = await Note.find({})
  res.send(notes)
}

exports.getNote = async (req, res) => {
    const id = req.params.id;
    const note = await Note.findById(id);
    res.send(note)
}

exports.addNote = async (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    };
    const newNote = await Note.create({
        note: req.body.note,
        color: req.body.color
    });

  res.send(newNote)
}

exports.deleteNote = async (req, res) => {
    const id = req.params.id;
    const deletednote = await Note.findByIdAndDelete(id);
    res.send(deletednote);
}

