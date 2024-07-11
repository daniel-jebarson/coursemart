const express = require("express");
const { registerCourse } = require("../controllers/course.js");
const { authorizer } = require("../middleware/auth/auth");

const router = express.Router();

router.route("/register").post(authorizer, registerCourse);

module.exports = router;
