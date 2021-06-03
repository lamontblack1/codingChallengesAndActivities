// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var axios = require("axios");
let item = "";
// Make a request via axios to grab the HTML body from the site of your choice
//Sarasota Village Plaza
axios
  .get(
    "https://accessibleweeklyad.publix.com/PublixAccessibility/BrowseByListing/ByCategory/?ListingSort=8&StoreID=2628706&CategoryID=5232540"
  )
  .then(function (response) {
    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(response.data);
    // console.log(response.data);

    // An empty array to save the data that we'll scrape
    var results = [];

    // Select each element in the HTML body from which you want information.
    // NOTE: Cheerio selectors function similarly to jQuery's selectors,
    // but be sure to visit the package's npm page to see how it works
    $("h2.ellipsis_text").each(function (i, element) {
      if (item !== $(element).text()) {
        item = $(element).text();
        results.push({
          item: item
        });
      }
      // var link = $(element).find("a").attr("href");

      // $("article").each(function (i, element) {
      //   var title = $(element).children().text();
      //   var link = $(element).find("a").attr("href");

      // Save these results in an object that we'll push into the results array we defined earlier
    });

    // Log the results once you've looped through each of the elements found with cheerio
    console.log(results);
  });
