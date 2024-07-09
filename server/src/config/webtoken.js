const jsonwebtoken = require("jsonwebtoken");

const generateJWToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
};

module.exports = generateJWToken;
