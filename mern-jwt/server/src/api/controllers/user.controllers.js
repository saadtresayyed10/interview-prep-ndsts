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

module.exports = {
  registerUserController,
};
