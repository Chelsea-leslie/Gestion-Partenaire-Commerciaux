const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "partner"], required: true },
  partner_id: { type: mongoose.Schema.Types.ObjectId, ref: "Partner" },
});

module.exports = mongoose.model("User", UserSchema);
