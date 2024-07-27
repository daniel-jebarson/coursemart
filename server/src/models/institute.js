const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema(
  {
    InstituteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    address: {
      type: String,
      trim: true,
      default: "N/A",
    },
    website: {
      type: String,
      trim: true,
      default: "N/A",
    },
    locations: {
      type: [String],
      default: [],
    },
    instLogo: {
      type: String,
      trim: true,
      default: "N/A",
    },
  },
  {
    timestamps: true,
  }
);

const Institutes =
  mongoose.models.Institute || mongoose.model("Institute", instituteSchema);

module.exports = Institutes;
