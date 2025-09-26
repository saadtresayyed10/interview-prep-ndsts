const Game = require("../../model/Game");

const createGame = async (title, genre, lore, ratings) => {
  const exitingGame = await Game.findOne({ title });

  if (exitingGame) throw new Error("Game already exists");

  return await Game.create({ title, genre, lore, ratings });
};

const getAllGames = async () => {
  return await Game.find();
};

module.exports = {
  createGame,
  getAllGames,
};
