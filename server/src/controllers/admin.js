const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const CategoryModel = require("../models/category");
const { verifyAdmin } = require("../utility/admin");

const addCategory = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
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

module.exports = {
  addCategory,
  getAllCategory,
};
