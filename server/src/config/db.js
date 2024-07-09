const { connect } = require("mongoose");

const options = {
  autoIndex: true,
  useNewUrlParser: true,
};
const connectDB = () => {
  return connect(process.env.MONGO_URL, options);
};

module.exports = connectDB;
