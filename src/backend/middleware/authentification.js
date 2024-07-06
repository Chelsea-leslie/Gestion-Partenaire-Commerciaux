const jwt = require("jsonwebtoken");

// Middleware pour authentifier le JWT
const authenticateJWT = (req, res, next) => {
  // Récupération du token depuis les en-têtes de la requête
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("Accès refusé");
  }

  try {
    // Vérification et décryptage du token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Stockage des données décryptées dans req.user
    next(); // Passage au middleware ou à la route suivante
  } catch (ex) {
    res.status(400).send("Token invalide");
  }
};

// Middleware pour autoriser les rôles spécifiques
const authorizeRole = (role) => {
  return (req, res, next) => {
    // Vérification si le rôle de l'utilisateur correspond au rôle requis
    if (req.user.role !== role) {
      return res.status(403).send("Accès interdit");
    }
    next(); // Passage au middleware ou à la route suivante
  };
};

module.exports = { authenticateJWT, authorizeRole };
