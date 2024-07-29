const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const UserModel = require("../models/user");
const ResetPassModel = require("../models/resetPassword");
const TokenModel = require("../models/token");
const generateJWToken = require("../config/webtoken");
const sendEmail = require("../utility/sendEmail");
const emailTemplate = require("../constants/emailTemplate");
const resetEmailTemplate = require("../constants/restpassTemplate");
const verifyPage = require("../constants/verifyEmail");
require("dotenv").config();

const sendEmailLink = asyncHandler(async (req, res) => {
  try {
    const { email, id } = req.body;
    if (!id || !email) {
      throw new CustomError("Specify the required fields!", 400);
    }
    const UserExists = await UserModel.findOne({
      $and: [{ _id: id }, { email: email }],
    });

    if (!UserExists) {
      res.status(400).json({
        name: "Error",
        msg: "Invalid user or email id",
      });
      return;
    }

    const token = generateJWToken(id);
    let isDeleted = await TokenModel.deleteOne({
      userId: id,
    });
    const Token = await TokenModel.create({
      userId: id,
      token: token,
    });

    const emailStatus = await sendEmail(
      email,
      "Activate your account in CourseMart!",
      emailTemplate(
        `${req.protocol}://${req.get("host")}/email/${Token.userId}/verify/${
          Token.token
        }`
      )
    );

    if (emailStatus.status === "success") {
      console.log("email sent successfully".bgGreen.black.bold);
      res.status(200).json(emailStatus);
    } else {
      console.log("email not sent!".red);
      res.status(400).json(emailStatus);
    }
  } catch (err) {
    throw new CustomError("Can't send the email", 400);
  }
});

const verifyLink = asyncHandler(async (req, res) => {
  try {
    const { id, token } = req.params;
    const user = await UserModel.findOne({ _id: id });
    if (!user) throw new CustomError("Invalid link!", 400);

    const tokenFound = await TokenModel.findOne({
      userId: id,
      token: token,
    });
    if (!tokenFound) throw new CustomError("Invalid link!", 400);
    await UserModel.findByIdAndUpdate(user._id, {
      verified: true,
    });
    await TokenModel.deleteOne({ _id: tokenFound._id });

    res.status(200).send(verifyPage(`${process.env.WEBSITE_URL}/signin`));
  } catch (error) {
    console.log(error);
    throw new CustomError("Invalid link", 400);
  }
});

const sendResetEmailLink = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      throw new CustomError("Specify the required fields!", 400);
    }
    const UserExists = await UserModel.findOne({
      email: email,
    });

    if (!UserExists) {
      res.status(400).json({
        name: "Error",
        msg: "Invalid email id",
      });
      return;
    }

    const token = generateJWToken(email);
    let isDeleted = await ResetPassModel.deleteOne({
      email: email,
    });
    const Token = await ResetPassModel.create({
      email: email,
      resetToken: token,
    });

    const emailStatus = await sendEmail(
      email,
      "Reset your account password in CourseMart!",
      resetEmailTemplate(
        `${process.env.WEBSITE_URL}/forgotpassword/${Token._id}`
      )
    );

    if (emailStatus.status === "success") {
      console.log("email sent successfully".bgGreen.black.bold);
      res.status(200).json(emailStatus);
    } else {
      console.log("email not sent!".red);
      res.status(400).json(emailStatus);
    }
  } catch (err) {
    throw new CustomError("Can't send the email", 400);
  }
});

const verifyResetLink = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const ResetLink = await ResetPassModel.findOne({ _id: id });
    if (!ResetLink) throw new CustomError("Invalid Reset link!", 400);

    res.status(200).json({
      id: ResetLink._id,
      email: ResetLink.email,
      resetToken: ResetLink.resetToken,
    });
  } catch (error) {
    throw new CustomError("Invalid Reset link", 400);
  }
});

module.exports = {
  sendEmailLink,
  verifyLink,
  sendResetEmailLink,
  verifyResetLink,
};
