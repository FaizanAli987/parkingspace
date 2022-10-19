const express = require("express");
const {
  loginIn,
} = require("../controllers/userController");
const ErrorMiddlleWare = require("../middleware/error");

const router = express.Router();

router.route("/login").post(loginIn);

module.exports = router;
