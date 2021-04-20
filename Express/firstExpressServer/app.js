const express = require("express");
//express is a function that returns an app
const app = express();

let PORT = 3000

let lamont = {
    name: "Lamont",
    age: 48,
    job: "coder"
}

//Route must be created right before app.listen
//this app.get listens to requests coming in to forward slash, the root of the app
//As soon as someone makes a get to forward slash, the callback function will run and handle the request and response
app.get("/", function (req, res) {
    res.send("Welcome to this express app.")
});

app.get("/lamont", function (req, res) {
    res.json(lamont);
});
app.listen(PORT, function () {
    console.log("We are live on port " + PORT)
});

