let express = require("express");
let mysql = require("mysql");

let app = express();

let PORT = process.env.PORT || 8080;

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "passphrase",
    database: "service_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

app.get("/cast", function (req, res) {
    

    connection.query("SELECT * FROM seinfeld", function (err, result) {
        if (err) throw err;
        
        let html = buildHtml("Seinfeld Cast", result)
        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
  
});

app.get("/coolness-chart", function (req, res) {
    

    connection.query("SELECT * FROM seinfeld ORDER BY coolness DESC", function (err, result) {
        if (err) throw err;
        
        let html = buildHtml("Coolness Chart", result)
        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
  
});

app.get("/attitude-chart/:att", function (req, res) {
    let att = req.params.att
    

    connection.query("SELECT * FROM seinfeld WHERE attitude = '" + att + "'", function (err, result) {
        if (err) throw err;
        let html = buildHtml("Characters With " + att + " Attitude", result)
        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
  
});

app.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
});

function buildHtml(title, result) {
    // We then begin building out HTML elements for the page.
        let html = "<html><h1>" + title + "</h1>";

        // Here we begin an unordered list.
        html += "<table style='width:100%'>";
        html += "<tr><th><u>id</u></th><th><u>Actor Name</u></th><th><u>Character Name</u></th><th><u>Coolness</u></th><th><u>Attitude</u></th></tr>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            html += "<tr><th>" + result[i].id + "</th>";
            html += "<th>" + result[i].actorName + " </th>";
            html += "<th>" + result[i].characterName + " </th>";
            html += "<th>" + result[i].coolness + " </th>";
             html += "<th>" + result[i].attitude + " </th></tr>";
        }

        // We close our table.
    html += "</table></html>";
    return html;
};