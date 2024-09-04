const express = require("express");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/userModel");
require("dotenv").config();

const userController = express.Router();


// User Signup method here

userController.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  console.log(firstName,lastName,email,password,confirmPassword);


  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return res.json({ message: "Please enter all your information here" });
  }
  if (password !== confirmPassword) {
    return res.json({
      status: "Error",
      message: "Please check your credentials and try again",
    });
  }

  const existingUser = await UserModel.findOne({ email: email });

  if (existingUser) {
    return res.json({ status: "User already exist Please Login" });
  }
  try {
    bcrypt.hash(password, 8, async function (err, hash) {
      if (err) {
        return res.json({ status: "User not Created" });
      }
      const user = await UserModel.create({
        firstName,
        lastName,
        email,
        password: hash,
       
      });
      res.json({ status: "User Signup SuccessFully", newUser: lastName });
    });
  } catch (err) {
    console.log(err);
  }
});

// User Login method here


userController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  const hashed_password = user.password;
  try {
    bcrypt.compare(password, hashed_password, async function (err, result) {
      if (err || !result) {
        return json({
          status: "User not Logged in",
          message: "Please try to login again",
        });
      }
      const token = jwt.sign({ userId: user.email }, process.env.secretToken);
      res.json({
        status: "User Logged in SuccessFully",
        userIs: user.lastName,
        token: token,
      });
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = { userController };
