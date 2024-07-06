const mongoose = require("mongoose");

const statisticsSchema = new mongoose.Schema({
  totalPartners: { type: Number, required: true },
  totalProjects: { type: Number, required: true },
  totalPayments: { type: Number, required: true },
  totalGains: { type: Number, required: true },
  totalCharges: { type: Number, required: true },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Statistics", statisticsSchema);
