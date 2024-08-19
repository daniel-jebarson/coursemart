const UserModel = require("../models/user");
const { CustomError } = require("../error/custom");

async function findUserById(UserId) {
  const user = await UserModel.findOne({
    _id: UserId,
    role: "user",
  });
  return user;
}

async function ensureUserExists(UserId) {
  const user = await findUserById(UserId);

  if (!user) {
    throw new CustomError("User with that id not found!", 400);
  }

  return user;
}

module.exports = { findUserById, ensureUserExists };
