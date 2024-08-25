const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const CategoryModel = require("../models/category");
const SubCategoryModel = require("../models/subcategory");
const { verifyAdmin, ensureCategoryExists } = require("../utility/admin");

const addCategory = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    await verifyAdmin(req.user._id);
    const newCategory = await CategoryModel.create({
      createdBy: req.user._id,
      title,
      description,
    });

    if (newCategory) {
      res.status(200).json(newCategory);
    } else {
      throw new CustomError("Failed to create category!", 400);
    }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

const addSubCategory = asyncHandler(async (req, res) => {
  const { title, description, categoryId } = req.body;
  if (!title || !categoryId) {
    throw new CustomError("Specify the required fields!", 400);
  }

  try {
    await verifyAdmin(req.user._id);
    const newSubCategory = await SubCategoryModel.create({
      createdBy: req.user._id,
      category: categoryId,
      title,
      description,
    });

    if (newSubCategory) {
      res.status(200).json(newSubCategory);
    } else {
      throw new CustomError("Failed to create subcategory!", 400);
    }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

const getAllCategory = asyncHandler(async (req, res) => {
  try {
    const allCategory = await CategoryModel.find().select("title  description");

    res.status(200).json(allCategory);
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

const getAllSubCategory = asyncHandler(async (req, res) => {
  try {
    const { categoryId } = req.query;
    if (!categoryId) {
      throw new CustomError("Specify the categoryId!", 400);
    }
    await ensureCategoryExists(categoryId);
    const allSubCategory = await SubCategoryModel.find({
      category: categoryId,
    }).select("title  description");

    res.status(200).json(allSubCategory);
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(`Server Error : ${error.message}`, 500);
  }
});

module.exports = {
  addCategory,
  getAllCategory,
  addSubCategory,
  getAllSubCategory,
};
