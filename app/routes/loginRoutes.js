const express = require("express");
const wrapAsync = require("../utility/wrapAsync");
const HomeController = require("../controller/HomeController");
const Router = express.Router();

Router.get("/", wrapAsync(HomeController.Home));
Router.post("/login", wrapAsync(HomeController.login));
Router.post("/signin", wrapAsync(HomeController.signin));

module.exports = Router;
