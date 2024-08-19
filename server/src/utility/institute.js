const UserModel = require("../models/user");
const { CustomError } = require("../error/custom");

async function findInstituteById(InstituteId) {
  const inst = await UserModel.findOne({
    _id: InstituteId,
    role: "institute",
  });

  return inst;
}

async function ensureInstituteExists(InstituteId) {
  const inst = await findInstituteById(InstituteId);

  if (!inst) {
    throw new CustomError("Institute with that id not found!", 400);
  }

  return inst;
}

module.exports = { findInstituteById, ensureInstituteExists };
