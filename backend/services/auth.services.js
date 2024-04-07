const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const registerUser = async (username, email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const message = { succes: true, message: "Usuario Registrado exitosamente", newUser }

    return message;
  } catch (error) {
    return { success: false, massge: "ERROR AL REGISRAR AL USAURIO: " + error.message };
  }
};

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Usuario no econtrado");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Password incorrecta");
    }

    const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn: '1h'})

    const message = { succes: true, message: "Usuario Logueado exitosamente", user, token }


    return message
  } catch (error) {
    console.log(error);
    return { success: false, error: error.message };
  }
};

module.exports = { registerUser, loginUser}
