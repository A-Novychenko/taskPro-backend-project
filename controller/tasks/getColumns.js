const {Column} = require("../../models/task");

const getColumns = async (req, res) => {
    const { boardId: owner } = req.params;
    const result = await Column.find({owner});

    res.json(result);
}

module.exports = getColumns;