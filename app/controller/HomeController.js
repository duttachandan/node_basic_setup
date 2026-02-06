class HomeController {
  async Home(req, res) {
    res.render("index", {
      title: "Home Page",
      description: "Home Page Description",
      message: "Home Page message",
    });
  }

  async login(req, res) {
    res.json({
      route: "/login",
      authentication: false,
    });
  }

  async signin(req, res) {
    res.json({
      route: "/signin",
      authentication: false,
    });
  }
}

module.exports = new HomeController();
