// Sending token and saving in Cookies

const sendToken = (user, statuscode, res) => {
    res.status(statuscode).json({
      success: true,
      user,
     
    });
  };
  
  module.exports = sendToken;
  