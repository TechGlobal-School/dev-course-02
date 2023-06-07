// Imports
const express = require("express");
const path = require("path");

// Initalize app
const app = express();

// any configs
// app.use(express.static("assets"));
app.use(express.static(path.join(__dirname, "public")));
/** --- Routes --- */

// Send simple text
app.get("/text", (req, res) => {
  res.send("Hello World from Express Server!");
});

// Send object
app.get("/json", (req, res) => {
  //   const user = { name: "Techglobal" };
  const user = [{ name: "Techglobal" }];
  res.json(user);
});

// Send html string
app.get("/html", (req, res) => {
  res.send("<h1>Hello World from Express Server!</h1>");
});

// Send html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Listen
app.listen(5001, () => console.log("Server listening on 5001"));
