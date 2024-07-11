const mongoose = require("mongoose");

const courseContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    trim: true,
  },
});

const courseSchema = new mongoose.Schema(
  {
    courseTitle: { type: String, trim: true, required: true },
    Description: { type: String, trim: true },
    coursePrice: { type: Number, trim: true, required: true },
    Duration: { type: String, trim: true, default: "N/A" },
    teachingLanguage: {
      type: [String],
      trim: true,
    },
    startDate: { type: Date, trim: true, default: "N/A" },
    LearningOutcomes: {
      type: [String],
      trim: true,
    },
    keyFeatures: {
      type: [String],
      trim: true,
    },
    courseContent: {
      type: [courseContentSchema],
    },
    Prerequisites: {
      type: [String],
      trim: true,
    },
    Discount: { type: String, trim: true },
    teachingMode: {
      type: [String],
      trim: true,
    },
    facultyName: { type: String, trim: true },
    Certificate: { type: Boolean, default: false },
    InstituteName: { type: String, trim: true },
    ContactNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\+\d{1,2}\d{10}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    Location: { type: String, trim: true, required: true },
    courseImage: { type: String, trim: true },
    soldCount: { type: Number, trim: true, default: 0 },
    InstituteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Courses =
  mongoose.models.Course || mongoose.model("Course", courseSchema);

module.exports = Courses;
