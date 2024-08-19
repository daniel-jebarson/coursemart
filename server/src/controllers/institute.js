const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const InstituteModel = require("../models/institute");
const UserModel = require("../models/user");

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
    const inst = await UserModel.findOne({
      _id: InstituteId,
      role: "institute",
    });

    if (!inst) {
      throw new CustomError("Institute with that id not found!", 400);
    }

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
    console.log(error);
    throw new CustomError("Server Error", 500);
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

module.exports = {
  addInstituteData,
  updateInstituteData,
};
