const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  payment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
    required: true,
  },
  method: {
    type: String,
    enum: ["cash", "bank_transfer", "mobile_transfer"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: { type: String, enum: ["pending", "completed"], required: true },
  transaction_date: { type: Date },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
