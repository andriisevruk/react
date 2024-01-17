const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    note: String,
    color: String,
})

module.exports = mongoose.model('Note', noteSchema)

