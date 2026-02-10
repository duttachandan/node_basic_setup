const express = require("express");
const wrapAsync = require("../utility/wrapAsync");
const AuthApiController = require("../controller/AuthApiController");
const Router = express.Router();

Router.post("/login", wrapAsync(AuthApiController.LoginApi));
Router.post("/signin", wrapAsync(AuthApiController.SigninApi));

module.exports = Router;
