const express = require("express");
const {
  registerCourse,
  getCourseByInstituteId,
  getCourseByFilter,
  getCourseById,
  getCategorySubCategoryList,
} = require("../controllers/course.js");
const { authorizer } = require("../middleware/auth/auth");

const router = express.Router();

router.route("/register").post(authorizer, registerCourse);
router.route("/institute/:instituteId").get(getCourseByInstituteId);
router.route("/search").get(getCourseByFilter);
router.route("/categories").get(getCategorySubCategoryList);
router.route("/:id").get(getCourseById);

module.exports = router;
