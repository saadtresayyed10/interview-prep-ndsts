const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDB = require("./config/db");
const gameRoutes = require("./api/routes/game.services");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectToDB();

app.use("/api/game", gameRoutes);

app.get("/", (_req, res) => {
  res.json({ server: true });
});

module.exports = app;
