const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const UserModel = require("../models/user");
const ResetPassModel = require("../models/resetPassword");
const generateJWToken = require("../config/webtoken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone, role } = req.body;
  if (!name || !email || !password || !phone) {
    throw new CustomError("Specify the required fields!", 400);
  }
  const UserExists = await UserModel.findOne({
    $or: [{ email: email }],
  });

  if (UserExists) {
    if (UserExists.verified) {
      throw new CustomError("Username or gmail already exist!", 400);
    } else {
      res.status(200).json({
        _id: UserExists._id,
        name: UserExists.name,
        email: UserExists.email,
        phone: UserExists.phone,
        role: UserExists.role,
        verified: UserExists.verified,
      });
    }
  }

  try {
    const newUser = await UserModel.create({
      name,
      email,
      password,
      phone,
      role,
    });

    if (newUser) {
      res.status(200).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        verified: newUser.verified,
      });
    } else {
      throw new CustomError("Failed to create user!", 400);
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      // Mongoose validation error
      const errors = Object.values(error.errors).map((err) => err.message);
      throw new CustomError(errors, 400);
    }
    console.error("Error creating user:", error);
    throw new CustomError("Server Error", 500);
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
  if (selectUser) {
    if (!selectUser.verified) {
      throw new CustomError("Verify the Email first to login!", 400);
    }
    if (await selectUser.matchPassword(password)) {
      res.status(200).json({
        _id: selectUser._id,
        name: selectUser.name,
        email: selectUser.email,
        phone: selectUser.phone,
        role: selectUser.role,
        verified: selectUser.verified,
        token: generateJWToken(selectUser._id),
      });
    } else {
      throw new CustomError("Password is incorrect!", 400);
    }
  } else {
    throw new CustomError("Email  is incorrect!", 400);
  }
});

const updateUserData = asyncHandler(async (req, res) => {
  const { userId, name, phone } = req.body;

  const user = await UserModel.findOne({
    _id: userId,
  });

  if (!user) {
    throw new CustomError("Specify the InstituteId!", 400);
  }

  try {
    const selectUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        name: name,
        phone: phone,
      },
      { new: true }
    );
    res.status(200).json({
      _id: selectUser._id,
      name: selectUser.name,
      email: selectUser.email,
      phone: selectUser.phone,
      role: selectUser.role,
      verified: selectUser.verified,
    });
  } catch (error) {
    throw new CustomError("Server Error", 500);
  }
});

const updateUserPassword = asyncHandler(async (req, res) => {
  const { id, email, resetToken, password } = req.body;

  const user = await UserModel.findOne({
    email: email,
  });

  if (!user) {
    throw new CustomError("Invalid email id!", 400);
  }

  const Reset = await ResetPassModel.deleteOne({
    $and: [{ _id: id }, { resetToken: resetToken }],
  });

  if (Reset.deletedCount !== 1) {
    throw new CustomError("Invalid Reset Token or Reset id!", 400);
  }

  try {
    const selectUser = await UserModel.findOneAndUpdate(
      { email: email },
      {
        password: password,
      },
      { new: true }
    );
    res.status(200).json({
      _id: selectUser._id,
      name: selectUser.name,
      email: selectUser.email,
      phone: selectUser.phone,
      role: selectUser.role,
      verified: selectUser.verified,
    });
  } catch (error) {
    throw new CustomError("Server Error", 500);
  }
});

module.exports = {
  registerUser,
  loginUser,
  updateUserData,
  updateUserPassword,
};
