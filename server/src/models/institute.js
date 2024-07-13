const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({
  InstituteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  address: {
    type: String,
    trim: true,
  },
  website: {
    type: String,
    trim: true,
  },
  locations: {
    type: [String],
  },
  instLogo: {
    type: String,
    trim: true,
  },
});

const Institutes =
  mongoose.models.Institute || mongoose.model("Institute", instituteSchema);

module.exports = Institutes;
