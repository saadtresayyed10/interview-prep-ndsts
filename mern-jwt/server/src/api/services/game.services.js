const Game = require("../../model/Game");

const createGame = async (title, genre, lore, ratings) => {
  const existingGame = await Game.findOne({ title });

  if (existingGame) throw new Error("Game already exist");

  return await Game.create({ title, genre, lore, ratings });
};

const getAllGames = async () => {
  return await Game.find();
};

const getGameById = async (id) => {
  return await Game.findById(id);
};

const updateGame = async (id, title, genre, lore, ratings) => {
  const existingGame = await Game.findOne({ _id: id });

  if (!existingGame) throw new Error("Game do not exist");

  return await Game.findByIdAndUpdate(id, { title, genre, lore, ratings });
};

const deleteGame = async (id) => {
  const existingGame = await Game.findOne({ _id: id });

  if (!existingGame) throw new Error("Game do not exist");

  return await Game.findByIdAndDelete(id);
};

module.exports = {
  createGame,
  getAllGames,
  getGameById,
  updateGame,
  deleteGame,
};
