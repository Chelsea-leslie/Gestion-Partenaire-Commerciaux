const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  reportType: { type: String, enum: ["partner", "admin"], required: true },
  partnerId: { type: mongoose.Schema.Types.ObjectId, ref: "Partner" },
  generatedAt: { type: Date, default: Date.now },
  reportData: { type: mongoose.Schema.Types.Mixed, required: true }, // To store flexible report data
});

module.exports = mongoose.model("Reports", reportSchema);
