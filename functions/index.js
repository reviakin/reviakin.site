const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
var path = require("path");

var express = require("express");

var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("main");
});

app.get("/projects", (req, res, next) => {
  res.render("projects");
});

app.get("/contacts", (req, res, next) => {
  res.render("contacts");
});

app.use("/", (req, res, next) => {
  res.render("404");
});

// app.listen(3333)

exports.app = functions.https.onRequest(app);
