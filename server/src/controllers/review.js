const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const InstituteReviewModel = require("../models/institutereview");
const UserModel = require("../models/user");
const InstituteModel = require("../models/institute");
const { ensureInstituteExists } = require("../utility/institute");
const { ensureUserExists } = require("../utility/user");
const {
  isReviewNotGivenByUser,
  isReviewGivenByUser,
} = require("../utility/review");

const addInstituteReview = asyncHandler(async (req, res) => {
  const { id: InstituteId } = req.params;
  const { UserId, rating, title, description } = req.body;

  if (!InstituteId || !UserId || !rating) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    await ensureInstituteExists(InstituteId);
    await ensureUserExists(UserId);
    await isReviewNotGivenByUser(UserId, InstituteId);

    const newInstituteReview = await InstituteReviewModel.create({
      InstituteId,
      UserId,
      rating,
      title,
      description,
    });

    if (newInstituteReview) {
      res.status(200).json(newInstituteReview);
    } else {
      throw new CustomError("Failed to give review!", 400);
    }
  } catch (error) {
    console.log(error);
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

const updateInstituteReview = asyncHandler(async (req, res) => {
  const { id: InstituteId } = req.params;
  const { UserId, rating, title, description } = req.body;

  if (!InstituteId || !UserId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    await ensureInstituteExists(InstituteId);
    await ensureUserExists(UserId);
    await isReviewGivenByUser(UserId, InstituteId);
    const InstituteInfo = await InstituteReviewModel.findOneAndUpdate(
      { InstituteId: InstituteId, UserId: UserId },
      {
        rating: rating,
        title: title,
        description: description,
      },
      { new: true, upsert: true }
    );
    res.status(200).json(InstituteInfo);
  } catch (error) {
    console.log(error);
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

const getInstituteReviews = asyncHandler(async (req, res) => {
  const { id: InstituteId } = req.params;

  if (!InstituteId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    await ensureInstituteExists(InstituteId);
    const instituteReviews = await InstituteReviewModel.find({
      InstituteId: InstituteId,
    })
      .populate("UserId", "name email phone")
      .exec();
    res.status(200).json(instituteReviews);
  } catch (error) {
    console.log(error);
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

module.exports = {
  addInstituteReview,
  updateInstituteReview,
  getInstituteReviews,
};
