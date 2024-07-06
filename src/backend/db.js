// db.js
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
          .then(() => console.log("MongoDB is connected"))
  } catch (err) {
    console.error("Erreur de connexion à MongoDB", err);
    process.exit(1); // Arrête l'application en cas d'erreur de connexion
  }
};

module.exports = connectDB;
