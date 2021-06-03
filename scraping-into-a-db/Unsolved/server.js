// Using the tools and techniques you learned so far,
// you will scrape a website of your choice, then place the data
// in a MongoDB database. Be sure to make the database and collection
// before running this exercise.

// Consult the assignment files from earlier in class
// if you need a refresher on Cheerio.

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "scraper";
var collections = [];
item = "";

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function (req, res) {
  res.send("Hello world");
});

// TODO: make two more routes

// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)
app.get("/fromDb", function (req, res) {
  db.scraped.find({}, function (error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});
// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?

app.get("/all", function (req, res) {
  axios
    .get(
      "https://accessibleweeklyad.publix.com/PublixAccessibility/BrowseByListing/ByCategory/?ListingSort=8&StoreID=2628706&CategoryID=5232540"
    )
    .then(function (response) {
      console.log(response.data);
      // Load the HTML into cheerio and save it to a variable
      // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
      var $ = cheerio.load(response.data);
      $("h2.ellipsis_text").each(function (i, element) {
        if (item !== $(element).text()) {
          item = $(element).text();
          collections.push({
            item: item
          });
        }
      });
      let html =
        '<html><div class="container">' +
        '<div class="row">' +
        '<div class="col-2">' +
        '<div class="card">' +
        '<div class="card-body" id="bogo-list">' +
        '<h5 class="card-title">Publix BOGOs</h5>' +
        '<h6 class="card-subtitle mb-2 text-muted">Village Plaze</h6>';
      for (let i = 0; i < collections.length; i++) {
        const element = collections[i].item;
        html += "<p class=card-text'>" + element + "</p>";
      }
      html += "</div></div></div></div></div>";
      res.send(html);
      //put it into the database
      // db.scraped.insert(collections, function (error, found) {
      //   // Log any errors if the server encounters one
      //   if (error) {
      //     console.log(error);
      //   }
      //   // Otherwise, send the result of this query to the browser
      //   else {
      //     res.json(collections);
      //   }
      // });
    });
});

/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Listen on port 3000
app.listen(3000, function () {
  console.log("App running on port 3000!");
});
