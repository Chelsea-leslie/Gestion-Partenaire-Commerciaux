const express = require("express");
const router = express.Router();
const Partner = require("../models/partner");

// Ajouter un partenaire
router.post("/add", async (req, res) => {
  const { name, email, phone, address } = req.body;
  try {
    const newPartner = new Partner({ name, email, phone, address });
    const savedPartner = await newPartner.save();
    res.status(201).json(savedPartner);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Obtenir tous les partenaires
router.get("/obt", async (req, res) => {
  try {
    const partners = await Partner.find();
    res.send(partners);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obtenir un partenaire par ID
router.get("/:idobt", async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.idobt);
    if (!partner) {
      return res.status(404).send();
    }
    res.send(partner);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Mettre à jour un partenaire par ID
router.put("/:idMaj", async (req, res) => {
  try {
    const updatepartner = await Partner.findByIdAndUpdate(
      req.params.idMaj,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatepartner) {
      return res.status(404).json(updatepartner);
    }
    res.send(updatepartner);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Supprimer tous les partenaires
router.delete("/delAll", async (req, res) => {
  try {
    const delpartner = await Partner.deleteMany();
    if (!delpartner) {
      return res.status(404).send();
    }
    res.send({ message: "all partner deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Supprimer un partenaire par ID
router.delete("/:idSupp", async (req, res) => {
  try {
    const partner = await Partner.findByIdAndDelete(req.params.idSupp);
    if (!partner) {
      return res.status(404).send();
    }
    res.send({ message: "Partner deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
