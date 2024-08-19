const express = require("express");
const { registerFaculty } = require("../controllers/faculty");
const {
  addInstituteData,
  updateInstituteData,
} = require("../controllers/institute");
const {
  addInstituteReview,
  updateInstituteReview,
} = require("../controllers/review");
const { authorizer } = require("../middleware/auth/auth");

const router = express.Router();

router.route("/faculty").post(authorizer, registerFaculty);
router
  .route("/info")
  .post(authorizer, addInstituteData)
  .put(authorizer, updateInstituteData);

router
  .route("/:id/review")
  .post(authorizer, addInstituteReview)
  .put(authorizer, updateInstituteReview);

module.exports = router;
