const bcyptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../model/User");

const registerUser = async (email, password) => {
  const exisitingUser = await User.findOne({ email });

  if (exisitingUser) throw new Error("User already exist");

  const hashedPassword = await bcrypt.hash(password, 10);

  return await User.create({ email, hashedPassword });
};

module.exports = {
  registerUser,
};
