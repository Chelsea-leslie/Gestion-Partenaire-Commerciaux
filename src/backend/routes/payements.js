const express = require("express");
const router = express.Router();
const Payment = require("../models/payments");

// Ajouter un paiement
router.post("/add", async (req, res) => {
  const payment = new Payment(req.body);
  try {
    await payment.save();
    res.status(201).send(payment);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Obtenir tous les paiements
router.get("/obtpay", async (req, res) => {
  try {
    const payments = await Payment.find();
    res.send(payments);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obtenir un paiement par ID
router.get("/:idpay", async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).send();
    }
    res.send(payment);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Mettre à jour un paiement par ID
router.put("/:idmod", async (req, res) => {
  try {
    const modifpayment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!modifpayment) {
      return res.status(404).send();
    }
    res.send(modifpayment);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Supprimer tous les payements
router.delete("/Dall", async (req, res) => {
  try {
    const deletepayment = await Payment.deleteMany(req.params.id);
    if (!deletepayment) {
      return res.status(404).send();
    }
    res.send({ message: "Payment deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});



// Supprimer un paiement par ID
router.delete("/:idDel", async (req, res) => {
  try {
    const deletepayment = await Payment.findByIdAndDelete(req.params.id);
    if (!deletepayment) {
      return res.status(404).send();
    }
    res.send({ message: "Payment deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
