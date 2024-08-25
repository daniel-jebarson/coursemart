const AdminModel = require("../models/admin");
const CategoryModel = require("../models/category");
const { CustomError } = require("../error/custom");

async function findAdminById(AdminId) {
  const admin = await AdminModel.findOne({
    UserId: AdminId,
  });
  return admin;
}

async function findCategoryById(CategoryId) {
  const category = await CategoryModel.findById(CategoryId);
  return category;
}

async function verifyAdmin(AdminId) {
  const admin = await findAdminById(AdminId);

  if (!admin) {
    throw new CustomError("User is not admin", 400);
  }
  return admin;
}

async function ensureCategoryExists(CategoryId) {
  const category = await findCategoryById(CategoryId);

  if (!category) {
    throw new CustomError("No such category exist!", 400);
  }
  return category;
}

module.exports = {
  findAdminById,
  verifyAdmin,
  findCategoryById,
  ensureCategoryExists,
};
