const express = require("express");
const { authorizer } = require("../middleware/auth/auth");
const { sendEmailLink, verifyLink } = require("../controllers/verify");

const router = express.Router();

router.route("/:id/verify/:token").get(verifyLink);
router.route("/send").post(authorizer, sendEmailLink);

module.exports = router;
