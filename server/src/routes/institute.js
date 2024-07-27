const express = require("express");
const { registerFaculty } = require("../controllers/faculty");
const {
  addInstituteData,
  updateInstituteData,
} = require("../controllers/institute");
const { authorizer } = require("../middleware/auth/auth");

const router = express.Router();

router.route("/faculty").post(authorizer, registerFaculty);
router
  .route("/info")
  .post(authorizer, addInstituteData)
  .put(authorizer, updateInstituteData);

module.exports = router;
