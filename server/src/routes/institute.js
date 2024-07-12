const express = require("express");
const { registerFaculty } = require("../controllers/faculty");
const { authorizer } = require("../middleware/auth/auth");

const router = express.Router();

router.route("/faculty").post(authorizer, registerFaculty);

module.exports = router;
