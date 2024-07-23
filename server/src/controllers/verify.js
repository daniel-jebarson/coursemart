const asyncHandler = require("express-async-handler");
const { CustomError } = require("../error/custom");
const UserModel = require("../models/user");
const TokenModel = require("../models/token");
const generateJWToken = require("../config/webtoken");
const sendEmail = require("../utility/sendEmail");
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
      `Please click the below link for verification: \n\nThis link will expire in 10 minutes\n${
        req.protocol
      }://${req.get("host")}/email/${Token.userId}/verify/${
        Token.token
      }\n\n\n\tIf you have any queries regarding this email feel free to contact this email address`
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

    res.status(200).send(
      `   
     <html>
      <head>
        <script>
          let countdown = 5;
          function updateTimer() {
            document.getElementById('timer').innerText = countdown;
            countdown--;
            if (countdown < 0) {
              window.location.href = '${process.env.WEBSITE_URL}/login';
            } else {
              setTimeout(updateTimer, 1000);
            }
          }
          window.onload = updateTimer;
        </script>
      </head>
      <body>
        <h1>Email verified successfully!</h1>
        <p>Redirecting in <span id="timer">5</span> seconds...</p>
        <p>If not redirected, <a href="${process.env.WEBSITE_URL}/login">click here to redirect</a>.</p>
      </body>
    </html>
    `
    );
  } catch (error) {
    console.log(error);
    throw new CustomError("Invalid link", 400);
  }
});

module.exports = {
  sendEmailLink,
  verifyLink,
};
