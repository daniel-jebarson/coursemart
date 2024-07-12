const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const FacultyModel = require("../models/faculty");

const registerFaculty = asyncHandler(async (req, res) => {
  const { InstituteId, name, About, experience, qualification, socialProfile } =
    req.body;

  if (!name || !InstituteId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
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
    throw new CustomError("Server Error", 500);
  }
});

module.exports = {
  registerFaculty,
};
