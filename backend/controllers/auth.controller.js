const { registerUser, loginUser } = require("../services/auth.services");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = registerUser(username, email, password);
    return res.status(201).send(result);
  } catch (error) {
    return res.status(500).json(result.error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = loginUser(email, password);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json(result);
  }
};

module.exports = {register, login}