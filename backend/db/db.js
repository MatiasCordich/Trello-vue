const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Conectado a la DB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectDB