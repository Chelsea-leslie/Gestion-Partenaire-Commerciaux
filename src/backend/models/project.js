const mongoose = require("mongoose");
// const Partner = require("./partner");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  amount: { type: Number, required: true },
  charges: { type: Number },
  start_date: { type: Date },
  end_date: { type: Date },
  partners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Partner' }]
});

module.exports = mongoose.model("Project", ProjectSchema);

