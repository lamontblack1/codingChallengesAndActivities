$(document).ready(function () {
  getJson("/all");

  $("#weight-sort").on("click", function () {
    changeActiveState("#animal-weight");
    getJson("/weight");
  });
  $("#name-sort").on("click", function () {
    changeActiveState("#animal-name");
    getJson("/name");
  });
  /* TODO:
    
    1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
    Each row should have info for one animal.
  
    2. Make two AJAX functions that fire when users click the two buttons on index.html.
        a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
        b. When the user clicks the Name button, the table should display the animal data sorted by name.
  
    Good luck!
  
    *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
    What can we do to the table to accomplish this?
  
    *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
    *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
  */

  // We'll be rewriting the table's data frequently, so let's make our code more DRY
  // by writing a function that takes in data (JSON) and creates a table body
  function changeActiveState(selector) {
    $("th").removeClass("active");
    $(selector).addClass("active");
  }

  function displayResults(data) {
    const $tbody = $("#displayResults");
    $tbody.empty();
    for (let i = 0; i < data.length; i++) {
      const newRow = $(
        "<tr><td>" +
          data[i].name +
          "</td>" +
          "<td>" +
          data[i].numLegs +
          "</td>" +
          "<td>" +
          data[i].class +
          "</td>" +
          "<td>" +
          data[i].weight +
          "</td>" +
          "<td>" +
          data[i].whatIWouldReallyCallIt +
          "</td></tr>"
      );
      $tbody.append(newRow);
    }
  }

  function getJson(url) {
    $.get(url, function (data) {
      // Call our function to generate a table body
      displayResults(data);
    });
  }
});