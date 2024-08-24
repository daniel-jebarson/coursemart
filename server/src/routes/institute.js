const express = require("express");
const {
  registerFaculty,
  getAllFacultiesByInstituteId,
} = require("../controllers/faculty");
const {
  addInstituteData,
  updateInstituteData,
  getInstituteById,
} = require("../controllers/institute");
const {
  addInstituteReview,
  updateInstituteReview,
  getInstituteReviews,
} = require("../controllers/review");
const { deleteCourse } = require("../controllers/course");
const { authorizer } = require("../middleware/auth/auth");

const router = express.Router();

router.route("/faculty").post(authorizer, registerFaculty);
router
  .route("/info")
  .post(authorizer, addInstituteData)
  .put(authorizer, updateInstituteData);

router
  .route("/:id/review")
  .get(authorizer, getInstituteReviews)
  .post(authorizer, addInstituteReview)
  .put(authorizer, updateInstituteReview);

router.route("/:id/info").get(authorizer, getInstituteById);

router.route("/course/:id").delete(authorizer, deleteCourse);

router.route("/:id/faculty").get(authorizer, getAllFacultiesByInstituteId);

module.exports = router;
