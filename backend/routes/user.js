const express = require("express");

//controller function
const { signupUser, loginUser } = require("../controllers/useController");

const router = express.Router();

//login router
router.post("/login", loginUser);

//signup router
router.post("/signup", signupUser);

module.exports = router;
