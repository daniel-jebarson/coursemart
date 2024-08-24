const FacultyModel = require("../models/faculty");
const { CustomError } = require("../error/custom");

async function findFacultyById(FacultyId) {
  const faculty = await FacultyModel.findOne({
    _id: FacultyId,
  });
  return faculty;
}

async function ensureFacultyExists(FacultyId) {
  const faculty = await findFacultyById(FacultyId);

  if (!faculty) {
    throw new CustomError("Faculty with that id not found!", 400);
  }
  return faculty;
}

module.exports = { findFacultyById, ensureFacultyExists };
