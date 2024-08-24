const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const FacultyModel = require("../models/faculty");
const { ensureInstituteExists } = require("../utility/institute");
const { ensureFacultyExists } = require("../utility/faculty");

const registerFaculty = asyncHandler(async (req, res) => {
  const { InstituteId, name, About, experience, qualification, socialProfile } =
    req.body;

  if (!name || !InstituteId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    await ensureInstituteExists(InstituteId);
    const newFaculty = await FacultyModel.create({
      InstituteId,
      name,
      About,
      experience,
      qualification,
      socialProfile,
    });

    if (newFaculty) {
      res.status(200).json(newFaculty);
    } else {
      throw new CustomError("Failed to create user!", 400);
    }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

const updateFacultyInfo = asyncHandler(async (req, res) => {
  const { id: facultyId } = req.params;
  const { name, About, experience, qualification, socialProfile } = req.body;

  if (!facultyId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    await ensureFacultyExists(facultyId);
    const facultyInfo = await FacultyModel.findOneAndUpdate(
      { _id: facultyId },
      {
        name,
        About,
        experience,
        qualification,
        socialProfile,
      },
      { new: true, upsert: true }
    );

    res.status(200).json(facultyInfo);
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

const getAllFacultiesByInstituteId = asyncHandler(async (req, res) => {
  const { id: InstituteId } = req.params;

  if (!InstituteId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    await ensureInstituteExists(InstituteId);

    const facultyMembers = await FacultyModel.find({
      InstituteId: InstituteId,
    });

    res.status(200).json(facultyMembers);
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

const deleteFacultyById = asyncHandler(async (req, res) => {
  const { id: facultyId } = req.params;

  if (!facultyId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    await ensureFacultyExists(facultyId);
    const faculty = await FacultyModel.findByIdAndDelete(facultyId);
    if (faculty) {
      res.status(200).json({ message: "Faculty deleted successfully!" });
    }
    throw new CustomError("Error occured while deleting faculty", 400);
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

module.exports = {
  registerFaculty,
  getAllFacultiesByInstituteId,
  updateFacultyInfo,
  deleteFacultyById,
};
