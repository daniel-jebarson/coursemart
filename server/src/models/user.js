const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["user", "institute"],
      default: "user",
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();

  // Check if the password field is being updated
  if (update.password) {
    const salt = await bcrypt.genSalt(10);
    update.password = await bcrypt.hash(update.password, salt);
  }
  next(); // Proceed with the update operation
});

const Users = mongoose.models.Users || mongoose.model("User", userSchema);

module.exports = Users;
