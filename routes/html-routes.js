// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/login");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });
  app.get("/chat", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/chat.html"));
  });
  app.get("/match", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/match.html"));
  });
  app.get("/profile", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });
};
