const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../model/userModel");
const sendToken = require("../utils/SendToken");
const crypto = require("crypto");

//Login User
exports.loginIn = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Email and Password is Missing", 404));
  }
  const user = await User.findOne({ email:email,password:password }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or Password", 401));
  }

//   if (!isPasswordMatch) {
//     return next(new ErrorHandler("Invalid email and Password", 401));
//   }
  sendToken(user, 200, res);
});