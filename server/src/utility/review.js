const InstituteReviewModel = require("../models/institutereview");
const { CustomError } = require("../error/custom");

async function findUserReviewForInstitute(userId, instituteId) {
  const instReview = await InstituteReviewModel.findOne({
    UserId: userId,
    InstituteId: instituteId,
  });
  return instReview;
}

async function isReviewNotGivenByUser(userId, instituteId) {
  const instReview = await findUserReviewForInstitute(userId, instituteId);

  if (instReview) {
    throw new CustomError("Review already given by the user to institute", 400);
  }
  return instReview;
}

async function isReviewGivenByUser(userId, instituteId) {
  const instReview = await findUserReviewForInstitute(userId, instituteId);

  if (!instReview) {
    throw new CustomError("Review not given by the user to institute", 400);
  }
  return instReview;
}

module.exports = {
  findUserReviewForInstitute,
  isReviewNotGivenByUser,
  isReviewGivenByUser,
};
