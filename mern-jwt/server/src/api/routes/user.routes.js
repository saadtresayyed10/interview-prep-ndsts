const express = require("express");
const userControllers = require("../controllers/user.controllers");

const userRoutes = express.Router();

userRoutes.post("/register", userControllers.registerUserController);
userRoutes.post("/login", userControllers.loginUserController);
userRoutes.post("/logout", userControllers.logoutUserController);

module.exports = userRoutes;
