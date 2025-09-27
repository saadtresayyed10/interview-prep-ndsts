const Game = require("../../model/Game");

const createGame = async (title, genre, lore, ratings) => {
  const existingGame = await Game.findOne({ title });

  if (existingGame) throw new Error("Game already exists");

  return await Game.create({ title, genre, lore, ratings });
};

const getAllGames = async () => {
  return await Game.find();
};

const getGameById = async (id) => {
  return await Game.findById(id);
};

module.exports = {
  createGame,
  getAllGames,
  getGameById,
};
