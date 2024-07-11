class CustomError extends Error {
  constructor(message, statusCode) {
    if (Array.isArray(message)) {
      message = message.join(" ");
    }
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomError(msg, statusCode);
};

module.exports = { createCustomError, CustomError };
