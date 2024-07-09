const express = require("express");
const { registerUser, loginUser } = require("../controllers/user.js");
const { authorizer } = require("../middleware/auth/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
