const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const UserModel = require("../models/user");
const generateJWToken = require("../config/webtoken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password || !phone) {
    throw new CustomError("Specify the required fields!", 400);
  }
  const UserExists = await UserModel.findOne({
    $or: [{ email: email }],
  });
  if (UserExists) {
    throw new CustomError("Username or gmail already exist!", 400);
  }

  const newUser = await UserModel.create({
    name,
    email,
    password,
    phone,
  });
  const token = generateJWToken(newUser._id);
  if (newUser) {
    res.status(200).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      token: token,
    });
  } else {
    throw new CustomError("Failed to create user!", 400);
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError("Specify the required fields!", 400);
  }
  const selectUser = await UserModel.findOne({
    email: email,
  });
  // console.log(selectUser);
  if (selectUser) {
    if (await selectUser.matchPassword(password)) {
      res.status(200).json({
        _id: selectUser._id,
        name: selectUser.name,
        email: selectUser.email,
        phone: selectUser.phone,
        token: generateJWToken(selectUser._id),
      });
    } else {
      throw new CustomError("Password is incorrect!", 400);
    }
  } else {
    throw new CustomError("Email  is incorrect!", 400);
  }
});

module.exports = {
  registerUser,
  loginUser,
};
