const AdminModel = require("../models/admin");
const { CustomError } = require("../error/custom");

async function findAdminById(AdminId) {
  const admin = await AdminModel.findOne({
    UserId: AdminId,
  });
  return admin;
}

async function verifyAdmin(AdminId) {
  const admin = await findAdminById(AdminId);

  if (!admin) {
    throw new CustomError("User is not admin", 400);
  }

  return admin;
}

module.exports = { findAdminById, verifyAdmin };
