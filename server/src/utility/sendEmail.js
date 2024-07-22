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

    await transporter.sendMail({
      from: USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent successfully".bgGreen.black.bold);
  } catch (error) {
    console.log("email not sent!".red);
    console.log(error);
    return error;
  }
};
