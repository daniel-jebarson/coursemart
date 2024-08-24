const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const InstituteModel = require("../models/institute");
const { ensureInstituteExists } = require("../utility/institute");

const addInstituteData = asyncHandler(async (req, res) => {
  const {
    InstituteId,
    address,
    website,
    locations,
    instLogo,
    description,
    started,
    banner,
    gallery,
    timings,
    socialProfile,
  } = req.body;

  if (!InstituteId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    await ensureInstituteExists(InstituteId);
    const newInstituteInfo = await InstituteModel.create({
      InstituteId,
      address,
      website,
      locations,
      instLogo,
      description,
      started,
      banner,
      gallery,
      timings,
      socialProfile,
    });

    if (newInstituteInfo) {
      res.status(200).json(newInstituteInfo);
    } else {
      throw new CustomError("Failed to add institute data!", 400);
    }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

const updateInstituteData = asyncHandler(async (req, res) => {
  const {
    InstituteId,
    description,
    started,
    banner,
    gallery,
    timings,
    socialProfile,
    address,
    website,
    locations,
    instLogo,
  } = req.body;

  if (!InstituteId) {
    throw new CustomError("Specify the InstituteId!", 400);
  }

  try {
    const InstituteInfo = await InstituteModel.findOneAndUpdate(
      { InstituteId: InstituteId },
      {
        address: address,
        website: website,
        locations: locations,
        instLogo: instLogo,
        description: description,
        started: started,
        banner: banner,
        gallery: gallery,
        timings: timings,
        socialProfile: socialProfile,
      },
      { new: true, upsert: true }
    );
    res.status(200).json(InstituteInfo);
  } catch (error) {
    throw new CustomError("Server Error", 500);
  }
});

const getInstituteById = asyncHandler(async (req, res) => {
  const { id: InstituteId } = req.params;
  if (!InstituteId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    const insitute = await InstituteModel.findOne({
      InstituteId: InstituteId,
    }).populate("InstituteId", "name email phone");
    if (!insitute) {
      throw new CustomError("Institute not found!", 400);
    }
    res.status(200).json(insitute);
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

module.exports = {
  addInstituteData,
  updateInstituteData,
  getInstituteById,
};
