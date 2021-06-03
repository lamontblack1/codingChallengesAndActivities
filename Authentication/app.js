//no separate route code, you need to separate

const express = require("express");

const session = require("express-session");
const flash = require("connect-flash");
const passport = require("./config/passport.js");
const db = require("./models");
const isAuthenticated = require("./config/middleware/isAuthenticated");

const app = express();

app.set("view engine", "ejs");

//middleware
//const bodyparser = require("body-parser");
//app.use(bodyparser.urlencoded({extended: false}));
//app.use(bodyparser.json());

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false })); //should this be true? thats the way it was in express
app.use(express.json());

// this is for session
app.use(
  session({
    cookie: {
      maxAge: 60000,
    },
    secret: "some secret",
    resave: false,
    saveUninitialized: true,
  })
);

// this is for flash
app.use(flash());

//this is for passport
app.use(passport.initialize());
app.use(passport.session());

//routes
app.get("/login", function (req, res) {
  let msg = req.flash("error")[0];
  res.render("login", { message: msg });
});
//this is what passport uses, must have connect-flash to send the message using req.flash()
app.post(
  "/login",
  passport.authenticate("local-signin", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.get("/signup", function (req, res) {
  res.render("signup", { message: req.flash("error") });
});

app.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/profile",
    failureRedirect: "/signup",
    failureFlash: true,
  })
);

app.get("/profile", isAuthenticated, function (req, res) {
  res.render("profile", { user: req.user });
});

//logout
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/login");
});

db.sequelize.sync().then(function () {
  app.listen(3000, function () {
    console.log("We are live...");
  });
});
