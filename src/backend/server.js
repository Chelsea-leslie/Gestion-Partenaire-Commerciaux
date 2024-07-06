// Importation des modules nécessaires
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const ConnectDb = require("./db");
const cors = require("cors"); // Importez cors

dotenv.config();

const app = express();

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Utilisez CORS
app.use(cors());

// Importation des routes
const partners = require("./routes/partenaire");
const projects = require("./routes/projets");
const users = require("./routes/utilisateurs");
const payments = require("./routes/payements");
const statistics = require("./routes/statistiques");
const reports = require("./routes/rapports");

// Utilisation des routes avec le préfixe /api
app.use("/api/partenaire", partners);
app.use("/api/projets", projects);
app.use("/api/utilisateurs", users);
app.use("/api/payements", payments);
app.use("/api/statistiques", statistics);
app.use("/api/rapports", reports);

// Route de test pour vérifier que l'API fonctionne
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Initialisation du port pour l'application
const PORT = process.env.PORT || 5000;

// Démarrage du serveur
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Connexion à la base de données MongoDB
ConnectDb();
