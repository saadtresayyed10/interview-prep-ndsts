const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Game title is required"],
    },
    genre: {
      type: String,
      required: [true, "Game genre is required"],
    },
    lore: {
      type: String,
      required: false,
    },
    ratings: {
      type: Number,
      required: [true, "Game ratings are required"],
    },
  },
  { timestamps: true }
);

const game = mongoose.model("Game", gameSchema);

module.exports = game;
