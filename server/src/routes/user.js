const express = require("express");
const {
  registerUser,
  loginUser,
  updateUserData,
} = require("../controllers/user.js");
const { authorizer } = require("../middleware/auth/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/update").put(authorizer, updateUserData);

module.exports = router;
