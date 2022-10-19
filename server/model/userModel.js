const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    maxLength: [10, "Password can not greater then 10 Characters"],
    minLength: [2, "Password can not  less then 2 Characters"],
    select: false,
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password
userSchema.methods.comaparePassword = async function (enterpassword) {
  return bcrypt.compare(enterpassword, this.password);
};

userSchema.clearIndexes();
module.exports = mongoose.model("User", userSchema);
