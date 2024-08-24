const express = require("express");
const {
  updateFacultyInfo,
  deleteFacultyById,
} = require("../controllers/faculty");
const { authorizer } = require("../middleware/auth/auth");

const router = express.Router();

router.route("/:id/update").put(authorizer, updateFacultyInfo);
router.route("/:id/delete").delete(authorizer, deleteFacultyById);

module.exports = router;
