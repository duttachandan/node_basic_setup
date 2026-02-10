class HomeController {
  async Home(req, res) {
    res.render("index", {
      title: "Home Page",
      description: "Home Page Description",
      message: "Home Page message",
    });
  }

  async login(req, res) {
    const getToken = req.cookies?.sessionId;
    console.log(getToken + "is your Token");
    if (getToken) return res.redirect("/");
    res.render("login", {
      title: "Login Page",
      description: "user login page",
    });
  }

  async signin(req, res) {
    res.render("signin", {
      title: "Sign In Page",
      description: "user login page",
    });
  }
}

module.exports = new HomeController();
