const {Board} = require("../../models/task");

const getAllBoards = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await Board.find({owner});

    res.json(result);
}

module.exports = getAllBoards;