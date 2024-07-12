const express = require("express");
const {
  registerCourse,
  getCourseByInstituteId,
} = require("../controllers/course.js");
const { authorizer } = require("../middleware/auth/auth");

const router = express.Router();

router.route("/register").post(authorizer, registerCourse);
router.route("/institute/:instituteId").get(authorizer, getCourseByInstituteId);

module.exports = router;
