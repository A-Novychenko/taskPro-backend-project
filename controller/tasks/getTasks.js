const {Task} = require("../../models/task");

const getTasks = async (req, res) => {
    const { columnId: owner } = req.params;
    const result = await Task.find({owner});

    res.json(result);
}

module.exports = getTasks;