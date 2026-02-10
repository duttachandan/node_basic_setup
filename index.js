require("dotenv").config();
const express = require("express");
const path = require("path");

// Cookie-parser
const CookieParser = require("cookie-parser");

// Json Web Token
var jwt = require("jsonwebtoken");

// App initiation
const app = express();

// Database Connection
const DBConnection = require("./app/config/DBConnect");

DBConnection();

app.set("view engine", "ejs");
app.set(path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(CookieParser());

// Port
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Routes
const BaseRoutes = require("./app/routes/HomeRoutes");
app.use(BaseRoutes);

// Protected Routes
const LoggedRoutes = require("./app/routes/loginRoutes");
app.use("/auth", LoggedRoutes);

// Handeling all the error
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Some Error Occured",
  });
});

app.listen(port, () => {
  console.log(`website running on http://localhost:${port}`);
});
