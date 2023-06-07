const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();

// Serve static files
// app.use(express.static(path.join(__dirname, "public")));
// congifure handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Routes

app.get("/", (req, res) => {
  res.render("home", { title: "HomePage" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "AboutPage" });
});

app.get("/dashboard", (req, res) => {
  const isAdmin = true;
  const ceo = { firstName: "JOHN", lastName: "DOE" };
  const employees = [
    { name: "E1", email: "e1@gmail.com" },
    { name: "E2", email: "e2@gmail.com" },
  ];

  const partners = [
    { name: "P1", email: "p@gmail.com", companies: ["C1", "C2"] },
  ];
  res.render("dashboard", {
    isAdmin: isAdmin,
    ceo: ceo,
    employees: employees,
    partners: partners,
  });
});

// Listen
app.listen(5001, () => {
  console.log("Server running on 5001");
});
