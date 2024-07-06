const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  partner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Partner",
    required: true,
  },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed"], required: true },
  request_date: { type: Date, required: true },
  payment_date: { type: Date },
});

module.exports = mongoose.model("Payment", PaymentSchema);
