const {Task } = require("../../models/task")

const addTask = async (req, res) => {
   const { columnId: owner } = req.params; 
    const result = await Column.create({...req.body, owner}); 
    res.status(201).json(result);
};

module.exports = addTask;
