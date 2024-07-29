const express = require("express");
const {
  sendEmailLink,
  verifyLink,
  sendResetEmailLink,
  verifyResetLink,
} = require("../controllers/verify");

const router = express.Router();

router.route("/:id/verify/:token").get(verifyLink);
router.route("/send").post(sendEmailLink);
router.route("/resetpassword/send").post(sendResetEmailLink);
router.route("/:id/resetpass/verify").post(verifyResetLink);

module.exports = router;
