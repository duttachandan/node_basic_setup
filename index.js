const express = require("express");
const path = require("path");
// Json Web Token
var jwt = require("jsonwebtoken");

//Private key intialization
var privateKey = "sh2&2902";

// App initiation
const app = express();

// Database Connection
const DBConnection = require("./app/config/DBConnect");

DBConnection();

app.set("view engine", "ejs");
app.set(path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Port
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Routes
const BaseRoutes = require("./app/routes/loginRoutes");
app.use(BaseRoutes);

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
