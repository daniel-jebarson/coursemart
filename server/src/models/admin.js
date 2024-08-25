const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Admins = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

module.exports = Admins;
