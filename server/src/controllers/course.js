const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const CourseModel = require("../models/course");

const registerCourse = asyncHandler(async (req, res) => {
  const {
    courseTitle,
    Description,
    coursePrice,
    Duration,
    teachingLanguage,
    startDate,
    LearningOutcomes,
    keyFeatures,
    courseContent,
    Prerequisites,
    Discount,
    teachingMode,
    facultyName,
    Certificate,
    InstituteName,
    ContactNumber,
    Location,
    courseImage,
    soldCount,
    InstituteId,
  } = req.body;

  if (
    !courseTitle ||
    !coursePrice ||
    !ContactNumber ||
    !Location ||
    !InstituteId
  ) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    const newCourse = await CourseModel.create({
      courseTitle,
      Description,
      coursePrice,
      Duration,
      teachingLanguage,
      startDate,
      LearningOutcomes,
      keyFeatures,
      courseContent,
      Prerequisites,
      Discount,
      teachingMode,
      facultyName,
      Certificate,
      InstituteName,
      ContactNumber,
      Location,
      courseImage,
      InstituteId,
    });

    if (newCourse) {
      res.status(200).json(newCourse);
    } else {
      throw new CustomError("Failed to create new course!", 400);
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      // Mongoose validation error
      const errors = Object.values(error.errors).map((err) => err.message);
      console.log(errors);
      throw new CustomError(errors, 400);
    }
    console.error("Error creating user:", error);
    throw new CustomError("Server Error", 500);
  }
});

module.exports = {
  registerCourse,
};
