const express = require("express");
const {
  registerCourse,
  getCourseByInstituteId,
  getCourseByFilter,
  getCourseById,
} = require("../controllers/course.js");
const { authorizer } = require("../middleware/auth/auth");

const router = express.Router();

router.route("/register").post(authorizer, registerCourse);
router.route("/institute/:instituteId").get(authorizer, getCourseByInstituteId);
router.route("/search").get(authorizer, getCourseByFilter);
router.route("/:id").get(authorizer, getCourseById);

module.exports = router;
