const { Column } = require("../../models/task");

const addColumn = async(req, res) => {
    const { boardId: owner } = req.params; 
    const result = await Column.create({...req.body, owner}); 
    res.status(201).json(result);
}

module.exports = addColumn;