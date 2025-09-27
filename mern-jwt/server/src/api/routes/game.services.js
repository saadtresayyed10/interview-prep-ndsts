const express = require("express");
const gameControllers = require("../controllers/game.controllers");

const gameRoutes = express.Router();

gameRoutes.post("/", gameControllers.createGameController);
gameRoutes.get("/", gameControllers.getAllGamesController);
gameRoutes.get("/:id", gameControllers.getGameByIdController);
gameRoutes.put("/:id", gameControllers.updateGamedController);

module.exports = gameRoutes;
