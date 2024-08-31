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
router.route("/institute/:instituteId").get(authorizer, getCourseByInstituteId);
router.route("/search").get(authorizer, getCourseByFilter);
router.route("/categories").get(authorizer, getCategorySubCategoryList);
router.route("/:id").get(authorizer, getCourseById);

module.exports = router;
