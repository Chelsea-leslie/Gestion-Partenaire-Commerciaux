const express = require("express");
const router = express.Router();
const Statistics = require("../models/statistics");

// GET /admin/statistics - Visualisation des statistiques globales
router.get("/", async (req, res) => {
  try {
    const statistics = await Statistics.findOne()
      .sort({ lastUpdated: -1 })
      .exec();
    res.json(statistics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT /admin/statistics - Mise à jour des statistiques globales (nécessite authentification admin)
router.put("/", async (req, res) => {
  try {
    const {
      totalPartners,
      totalProjects,
      totalPayments,
      totalGains,
      totalCharges,
    } = req.body;
    let statistics = await Statistics.findOne()
      .sort({ lastUpdated: -1 })
      .exec();

    if (statistics) {
      statistics.totalPartners = totalPartners || statistics.totalPartners;
      statistics.totalProjects = totalProjects || statistics.totalProjects;
      statistics.totalPayments = totalPayments || statistics.totalPayments;
      statistics.totalGains = totalGains || statistics.totalGains;
      statistics.totalCharges = totalCharges || statistics.totalCharges;
      statistics.lastUpdated = Date.now();
    } else {
      statistics = new Statistics({
        totalPartners,
        totalProjects,
        totalPayments,
        totalGains,
        totalCharges,
      });
    }

    const updatedStatistics = await statistics.save();
    res.json(updatedStatistics);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
