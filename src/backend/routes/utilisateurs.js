const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const Token = require("../models/token");

// Enregistrer un utilisateur
router.post("/enreg", async (req, res) => {
  try {
    const { username, password, role, partner_id } = req.body;

    // Création d'un nouvel utilisateur
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      role,
      partner_id,
    });

    // Sauvegarde de l'utilisateur dans la base de données
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Connexion d'un utilisateur
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Trouver l'utilisateur par nom d'utilisateur
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send("Nom d'utilisateur incorrect");

    // Vérifier le mot de passe
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send("Mot de passe incorrect");

    // Générer un token JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "5h" } // Note: "10mins" is corrected to "10m"
    );

    // Enregistrer le token dans la table Token
    const newToken = new Token({ token, userId: user._id });
    await newToken.save();

    res.send({ token });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Récupérer tous les utilisateurs
router.get("/all", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Récupérer tous les tokens et leurs utilisateurs associés
router.get("/tokens", async (req, res) => {
  try {
    const tokens = await Token.find({}).populate("userId", "username role");
    res.status(200).send(tokens);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
