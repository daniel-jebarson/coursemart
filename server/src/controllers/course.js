const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const CourseModel = require("../models/course");
const { ensureInstituteExists } = require("../utility/institute");

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
    InstituteId,
    tags,
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
    await ensureInstituteExists(InstituteId);
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
      tags,
    });

    if (newCourse) {
      res.status(200).json(newCourse);
    } else {
      throw new CustomError("Failed to create new course!", 400);
    }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    if (error.name === "ValidationError") {
      // Mongoose validation error
      const errors = Object.values(error.errors).map((err) => err.message);
      throw new CustomError(errors, 400);
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

const getCourseByInstituteId = asyncHandler(async (req, res) => {
  const { instituteId } = req.params;
  if (!instituteId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    await ensureInstituteExists(instituteId);
    const instituteCourse = await CourseModel.find({
      InstituteId: instituteId,
    })
      .populate("InstituteId", "name email phone")
      .exec();

    if (instituteCourse) {
      res.status(200).json(instituteCourse);
    } else {
      throw new CustomError("Failed to fetch the institute's course!", 400);
    }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

const deleteCourse = asyncHandler(async (req, res) => {
  const { id: courseId } = req.params;
  const { InstituteId } = req.body;

  if (!courseId || !InstituteId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    await ensureInstituteExists(InstituteId);
    const result = await CourseModel.deleteOne({
      InstituteId: InstituteId,
      _id: courseId,
    });
    if (result.deletedCount === 0) {
      throw new CustomError("Invalid instituteId or courseId", 400);
    } else {
      res.status(200).json("Document deleted successfully");
    }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

module.exports = {
  registerCourse,
  getCourseByInstituteId,
  deleteCourse,
};
