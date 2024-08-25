const express = require("express");
const { addCategory } = require("../controllers/admin");
const { authorizer } = require("../middleware/auth/auth");

const router = express.Router();

router.route("/category/add").post(authorizer, addCategory);

module.exports = router;
