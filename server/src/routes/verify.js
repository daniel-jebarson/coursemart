const express = require("express");
const { sendEmailLink, verifyLink } = require("../controllers/verify");

const router = express.Router();

router.route("/:id/verify/:token").get(verifyLink);
router.route("/send").post(sendEmailLink);

module.exports = router;
