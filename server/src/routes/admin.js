const express = require("express");
const {
  addCategory,
  getAllCategory,
  addSubCategory,
  getAllSubCategory,
} = require("../controllers/admin");
const { authorizer } = require("../middleware/auth/auth");

const router = express.Router();

router.route("/category/add").post(authorizer, addCategory);
router.route("/category").get(authorizer, getAllCategory);
router.route("/subcategory/add").post(authorizer, addSubCategory);
router.route("/subcategory").get(authorizer, getAllSubCategory);

module.exports = router;
