const express = require("express");
const userControllers = require("../controllers/user.controllers");

const userRoutes = express.Router();

userRoutes.post("/", userControllers.registerUserController);

module.exports = userRoutes;
