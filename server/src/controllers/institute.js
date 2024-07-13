const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const InstituteModel = require("../models/institute");

const addInstituteData = asyncHandler(async (req, res) => {
  const { InstituteId, address, website, locations, instLogo } = req.body;

  if (!InstituteId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    const newInstituteInfo = await InstituteModel.create({
      InstituteId,
      address,
      website,
      locations,
      instLogo,
    });

    if (newInstituteInfo) {
      res.status(200).json(newInstituteInfo);
    } else {
      throw new CustomError("Failed to add institute data!", 400);
    }
  } catch (error) {
    throw new CustomError("Server Error", 500);
  }
});

module.exports = {
  addInstituteData,
};
