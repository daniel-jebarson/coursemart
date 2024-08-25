const express = require("express");
const { addCategory, getAllCategory } = require("../controllers/admin");
const { authorizer } = require("../middleware/auth/auth");

const router = express.Router();

router.route("/category/add").post(authorizer, addCategory);
router.route("/category").get(authorizer, getAllCategory);

module.exports = router;
