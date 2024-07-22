const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
      unique: true,
    },
    token: { type: String, required: true },
    TTL: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
if (!mongoose.model.Token) {
  tokenSchema.index({ TTL: 1 }, { expireAfterSeconds: 600 });
}

module.exports = mongoose.model.Token || mongoose.model("Token", tokenSchema);
