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

const facultySchema = new mongoose.Schema(
  {
    InstituteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    About: {
      type: String,
      trim: true,
    },
    experience: {
      type: String,
      trim: true,
    },
    qualification: {
      type: String,
      trim: true,
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

const Faculties =
  mongoose.models.Faculty || mongoose.model("Faculty", facultySchema);

module.exports = Faculties;
