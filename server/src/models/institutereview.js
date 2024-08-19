const mongoose = require("mongoose");

const instituteReviewSchema = new mongoose.Schema(
  {
    InstituteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0.5,
      max: 5,
    },
    title: {
      type: String,
      trim: true,
      default: "",
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const InstituteReviews =
  mongoose.models.InstituteReview ||
  mongoose.model("InstituteReview", instituteReviewSchema);

module.exports = InstituteReviews;
