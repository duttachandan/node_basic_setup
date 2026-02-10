const verfiyUser = (req, res) => {
  const token = req.cookies?.sessionId;
  console.log(token + "is your token");
  if (!token) res.redirect("/");
};
