const express = require("express");
const {
  registerUser,
  loginUser,
  updateUserData,
  updateUserPassword,
} = require("../controllers/user.js");
const { authorizer } = require("../middleware/auth/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/update").put(authorizer, updateUserData);
router.route("/update/password").put(updateUserPassword);

module.exports = router;
