// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/users"); // Assurez-vous de mettre à jour le chemin vers votre modèle utilisateur

// // Endpoint de connexion
// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   // Trouver l'utilisateur par nom d'utilisateur
//   const user = await User.findOne({ username });
//   if (!user) return res.status(400).send("Nom d'utilisateur ou mot de passe incorrect");

//   // Vérifier le mot de passe
//   const validPassword = await bcrypt.compare(password, user.password);
//   if (!validPassword)
//     return res.status(400).send("Nom d'utilisateur ou mot de passe incorrect");

//   // Générer un token JWT
//   const token = jwt.sign(
//     { _id: user._id, role: user.role, partner_id: user.partner_id },
//     process.env.JWT_SECRET,
//     { expiresIn: "1h" } // Le token expirera dans 1 heure
//   );

//   res.send({ token });
// });

// module.exports = router;
