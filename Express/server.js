let fs = require("fs");
let http = require("http");

let PORT = 8080

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    let path = req.url

    switch (path) {

    case "/food"
    return fs.readFile(_dirname + "/favoriteFoods.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { Content-Type: "text/html"});
        res.end(data);
    });
    
    case "/movies"
    return fs.readFile(_dirname + "favoriteMovies.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { Content-Type: "text/html"});
        res.end(data);  
    });
        
    case "/flowers"
    return fs.readFile(_dirname + "favoriteFlowers.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { Content-Type: "text/html"});
        res.end(data);  
    });

    default:
        return fs.readFile(_dirname + "index.html", function (err, data) {
            if (err) throw err;
            res.writeHead(200, { Content-Type: "text/html"});
            res.end(data);  
        });

    }
};

server.listen(PORT, function() {
    console.log("Server is listening on port: " + PORT)
})