const mongoose = require("mongoose");



//creation du schema de donnee
const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  
});

// Création d'un modèle basé sur le schéma
const Partner = mongoose.model("Partner", partnerSchema);

module.exports = Partner;
