const gameServices = require("../services/game.services");

const createGameController = async (req, res) => {
  const { title, genre, lore, ratings } = req.body;

  if (!title || !genre || !ratings) {
    return res.status(400).json({ message: "Required fields are missing" });
  }

  try {
    const game = await gameServices.createGame(title, genre, lore, ratings);
    res.status(201).json({ message: "Game created", data: game });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllGamesController = async (_req, res) => {
  try {
    const game = await gameServices.getAllGames();
    res.status(200).json({ data: game });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGameByIdController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({ message: "ID not found in params" });
  }

  try {
    const game = await gameServices.getGameById(id);
    res.status(200).json({ data: game });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createGameController,
  getAllGamesController,
  getGameByIdController,
};
