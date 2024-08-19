const mongoose = require("mongoose");

const socialProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
    required: true,
  },
});

const galleryProfileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
    required: true,
  },
});

const timingSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
    trim: true,
  },
  opentime: {
    type: String,
    trim: true,
    required: true,
  },
});

const instituteSchema = new mongoose.Schema(
  {
    InstituteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    started: {
      type: String,
      trim: true,
      default: "",
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
    banner: {
      type: String,
      trim: true,
      default: "",
    },
    gallery: {
      type: [galleryProfileSchema],
      default: [],
    },
    timings: {
      type: [timingSchema],
      default: [],
    },
    socialProfile: {
      type: [socialProfileSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Institutes =
  mongoose.models.Institute || mongoose.model("Institute", instituteSchema);

module.exports = Institutes;
