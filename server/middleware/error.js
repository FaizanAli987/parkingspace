const ErrorHandler = require("../utils/errorHandler");
// ERROR CHECKING FUNCTION
module.exports = (err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.message = err.message || "Internal Server Error";

  // WRONG ID ErrorHandler
  if (err.name == "CastError") {
    const message = `Resource are not found :Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  if (err.code == 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }
  // JSON WEB TOKEN ERROR
  if (err.name == "JsonWebTokenError") {
    const message = `Json Web Token is Invalid ,Try Again `;
    err = new ErrorHandler(message, 400);
  }
  // Token Expire Error
  if (err.name == "TokenExpiredError") {
    const message = `Json Web Token is Expire,Try Again `;
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statuscode).json({
    success: false,
    message: err.message,
  });
};
