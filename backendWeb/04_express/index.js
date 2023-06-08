// Imports
const express = require("express");
const { engine } = require("express-handlebars");
const { timeLogger, trimSearchInput, validateUserId } = require("./middleware");
const { return404Error, return500Error } = require("./errorHandler");

// Initalize app
const app = express();

// Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// middleware
app.use(timeLogger);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/users/:id", validateUserId, (req, res) => {
  res.send("Users");
});

app.get("/search", trimSearchInput, (req, res) => {
  res.send("Search Page");
});

app.get("/error", (req, res, next) => {
  const err = { message: "Something happened!" };

  if (err) {
    // forward this error to 500 middleware
    next(err);
  }
  if (!err) {
    res.render("/");
    // res.redirect("/");
  }
});

// Handle Errors
app.use(return404Error);
app.use(return500Error);

// Listen
app.listen(5001, () => console.log("Server listening on 5001"));

/**
 *
 * Middlware => next()
 * Call next function inside middlwares to continue to next middlwares or route
 *
 * If you do app.use(middleware) => this is going to apply for all routes
 */
