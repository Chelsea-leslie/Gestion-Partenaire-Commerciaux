const express = require("express");
const router = express.Router();
const Transaction = require("../models/transactions");
// const authenticateJWT = require("../middleware/authentification");

// Ajouter une transaction
router.post("/add", async (req, res) => {
  const transaction = new Transaction(req.body);
  try {
    await transaction.save();
    res.status(201).send(transaction);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Obtenir toutes les transactions
router.get("/obtenir", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.send(transactions);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obtenir une transaction par ID
router.get("/:idobt", async (req, res) => {
  try {
    const obtTransaction = await Transaction.findById(req.params.id);
    if (!obtTransaction) {
      return res.status(404).send();
    }
    res.send(obtTransaction);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Mettre à jour une transaction par ID
router.put("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!transaction) {
      return res.status(404).send();
    }
    res.send(transaction);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Supprimer toute les transactions
router.delete("/:idsupAll", async (req, res) => {
  try {
    const SupAlltransaction = await Transaction.deleteMany(req.params.id);
    if (!SupAlltransaction) {
      return res.status(404).send();
    }
    res.send({ message: "All Transactions are deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});


// Supprimer une transaction par ID
router.delete("/:idsup", async (req, res) => {
  try {
    const Suptransaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!Suptransaction) {
      return res.status(404).send();
    }
    res.send({ message: "Transaction deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
