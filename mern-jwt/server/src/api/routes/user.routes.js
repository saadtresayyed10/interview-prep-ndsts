const express = require("express");
const userControllers = require("../controllers/user.controllers");
const authMiddleware = require("../../middlware/auth-middleware");

const userRoutes = express.Router();

userRoutes.post("/register", userControllers.registerUserController);
userRoutes.post("/login", userControllers.loginUserController);
userRoutes.post("/logout", userControllers.logoutUserController);
userRoutes.get(
  "/profile",
  authMiddleware,
  userControllers.getProfileController
);

module.exports = userRoutes;
