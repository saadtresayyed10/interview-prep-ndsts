const userServices = require("../services/user.services");

const registerUserController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ message: "All fields are required" });
  }

  try {
    const user = await userServices.registerUser(email, password);
    res.status(201).json({ message: "User registered", data: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUserController = async (req, res) => {
  const { email, password } = req.body;
  const { token, user } = await userServices.loginUser(email, password);
  try {
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.status(200).json({ message: "User logged in", token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logoutUserController = async (req, res) => {
  req.clearCookie("token");
  res.status(200).json({ message: "User logged out" });
};

module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController,
};
