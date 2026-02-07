class HomeController {
  async Home(req, res) {
    res.render("index", {
      title: "Home Page",
      description: "Home Page Description",
      message: "Home Page message",
    });
  }

  async login(req, res) {
    console.log("login")
    res.render('login', {
      title: "Login Page",
      description: "user login page"
    })
  }

  async signin(req, res) {
    console.log("Signin")
    res.render('signin', {
      title: "Sign In Page",
      description: "user login page"
    })
  }
}

module.exports = new HomeController();
