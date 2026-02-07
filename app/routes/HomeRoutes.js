const express = require('express')
const Router = express.Router();

// wrapAsync 
const wrapAsync = require('../utility/wrapAsync')

// Home Controller 
const HomeController = require('../controller/HomeController')

Router.get("/", wrapAsync(HomeController.Home));
Router.get("/login", wrapAsync(HomeController.login));
Router.get("/signin", wrapAsync(HomeController.signin));

module.exports = Router;