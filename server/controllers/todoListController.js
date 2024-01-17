const List = require("../models/task")

// actions
exports.getList = async (req, res) => {
    const notes = await List.find({})
    res.send(notes)
}

exports.getTask = async (req, res) => {
    const id = req.params.id;
    const task = await List.findById(id);
    res.send(task)
}

exports.addTask = async (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    };
    const newTask = await List.create({
        task: req.body.task,
        status: req.body.status,
    });

    res.send(newTask)
}

exports.deleteTask = async (req, res) => {
    const id = req.params.id;
    const deletedTask = await List.findByIdAndDelete(id);
    res.send(deletedTask);
}

exports.updateTaskStatus = async (req, res) => {
    const id = req.params.id;
    const { task, status } = req.body
    try {
        const updatedTask = await List.findByIdAndUpdate(id, { task, status }, { new: true });
        if (!updatedTask) {
            return res.status(404).send("Завдання не знайдено");
        }
        res.send(updatedTask);
    } catch (err) {
        console.error("Помилка оновлення статусу завдання:", error);
        res.status(500).send("Помилка сервера при оновленні статусу завдання");
    }

}

