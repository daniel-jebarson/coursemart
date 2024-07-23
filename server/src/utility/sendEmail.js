const nodemailer = require("nodemailer");
const colors = require("colors");

module.exports = async (email, subject, text) => {
  const { HOST, SERVICE, EMAIL_PORT, SECURE, USER, PASS } = process.env;
  try {
    const transporter = nodemailer.createTransport({
      host: HOST,
      service: SERVICE,
      port: Number(EMAIL_PORT),
      secure: Boolean(SECURE),
      auth: {
        user: USER,
        pass: PASS,
      },
    });

    let info = await transporter.sendMail({
      from: USER,
      to: email,
      subject: subject,
      text: text,
    });

    return {
      status: "success",
      message: info.response,
      error: null,
    };
  } catch (error) {
    return {
      status: "error",
      message: "email not sent!",
      error: error.message,
    };
  }
};
