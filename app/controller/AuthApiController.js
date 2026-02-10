require("dotenv").config();
const JWT = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY;
const userSchema = require("../model/userSchema");
// const cookieParser = require('cookie-parser');

console.log(SECRET);

class AuthApiController {
  // Login Api
  async LoginApi(req, res) {
    const { email, password } = req.body;
    console.log(email, password);
  }

  // Sign In Api
  async SigninApi(req, res) {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    const payload = {
      sub: email,
      role: password,
    };
    const token = JWT.sign(payload, SECRET, {
      expiresIn: "15m",
    });
    if (!token) throw new ExpressError(404, "No Token Found");
    const user = new userSchema({
      username: username,
      email: email,
      token: token,
    });
    const data = await user.save();
    console.log(data);
    if (!data) throw new ExpressError(404, "no user created");
    res.cookie("sessionId", token);
    res.json(data);
  }
}

module.exports = new AuthApiController();
