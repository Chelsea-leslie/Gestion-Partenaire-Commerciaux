const express = require("express");
const router = express.Router();
const Reports = require("../models/reports");
// const Partner = require("../models/partner");

// GET /reports/partners - Génération de rapports pour les partenaires
router.get("/partners", async (req, res) => {
  try {
    const reports = await Reports.find({ reportType: "partner" }).exec();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /reports/admin - Génération de rapports pour l'administration
router.get("/admin", async (req, res) => {
  try {
    const reports = await Reports.find({ reportType: "admin" }).exec();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /reports/partners/:id - Visualisation des performances et des contributions des partenaires
router.get("/partners/:id", async (req, res) => {
  try {
    const report = await Reports.findOne({
      reportType: "partner",
      partnerId: req.params.id,
    }).exec();
    if (report) {
      res.json(report);
    } else {
      res.status(404).json({ message: "Report not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /admin/reports - Création d'un nouveau rapport (nécessite authentification admin)
router.post("/", async (req, res) => {
  try {
    const { reportType, partnerId, reportData } = req.body;
    const report = new Reports({
      reportType,
      partnerId,
      reportData,
    });
    const newReport = await report.save();
    res.status(201).json(newReport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
