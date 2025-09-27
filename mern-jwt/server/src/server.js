const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDB = require("./config/db");
const cookieParser = require("cookie-parser");
const gameRoutes = require("./api/routes/game.routes");
const userRoutes = require("./api/routes/user.routes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

connectToDB();

app.use("/api/game", gameRoutes);
app.use("/api/user", userRoutes);

app.get("/", (_req, res) => {
  res.json({ server: true });
});

module.exports = app;
