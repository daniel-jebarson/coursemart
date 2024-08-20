const express = require("express");
const { registerFaculty } = require("../controllers/faculty");
const {
  addInstituteData,
  updateInstituteData,
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

router.route("/course/:id").delete(authorizer, deleteCourse);

module.exports = router;
