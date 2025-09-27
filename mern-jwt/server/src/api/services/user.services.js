const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../model/User");

const generateToken = require("../../lib/generate-token");

const registerUser = async (email, password) => {
  const exisitingUser = await User.findOne({ email });

  if (exisitingUser) throw new Error("User already exist");

  const hashedPassword = await bcryptjs.hash(password, 10);

  return await User.create({ email, password: hashedPassword });
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isPasswordValid = bcryptjs.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Password is incorrect");

  const token = generateToken(user._id);
  return { token, user };
};

const getProfile = async (id) => {
  const user = await User.findOne({ _id: id });
  if (!user) throw new Error("User not found");

  return await User.find();
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};
