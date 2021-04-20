const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
let PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const icecreams = [
      {name: 'vanilla', price: 10, awesomeness: 3},
      {name: 'chocolate', price: 4, awesomeness: 8},
      {name: 'banana', price: 1, awesomeness: 1},
      {name: 'greentea', price: 5, awesomeness: 7},
      {name: 'jawbreakers', price: 6, awesomeness: 2},
      { name: "pistachio", price: 11, awesomeness: 15 }
];
    
app.get("/icecream/:name", function (req, res) {
    const iceCreamName = req.params.name;
    for (let i = 0; i < icecreams.length; i++) {
        if (iceCreamName === icecreams[i].name) {
            //display the info
            res.render("index", icecreams[i])
        }
            
    }
});

app.get("/icecreams", function (req, res) {
    res.render("all-types", {
        types: icecreams
    })
});

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});