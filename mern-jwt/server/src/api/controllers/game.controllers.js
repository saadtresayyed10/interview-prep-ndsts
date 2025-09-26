const gameServices = require("../services/game.services");

const createGameController = async (req, res) => {
  const { title, genre, lore, ratings } = req.body;

  const data = { title, genre, lore, ratings };

  if (!data) {
    res.status(404).json({ message: "Required fields are missing" });
  }

  try {
    const game = gameServices.createGame(data);
    res.status(201).json({ message: "Game created", data: game });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllGamesController = async (_req, res) => {
  try {
    const game = gameServices.getAllGames();
    res.status(200).json({ data: game });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createGameController,
  getAllGamesController,
};
