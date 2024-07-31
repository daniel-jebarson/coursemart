const mongoose = require("mongoose");

const ResetPassSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    resetToken: { type: String, required: true },
    TTL: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
if (!mongoose.model.ResetPassword) {
  ResetPassSchema.index({ TTL: 1 }, { expireAfterSeconds: 900 });
}

module.exports =
  mongoose.model.ResetPassword ||
  mongoose.model("ResetPassword", ResetPassSchema);
