$(document).ready(function () {
  $("#form").submit(function (event) {
  event.preventDefault();
  
  //selectors
  const foodInput = $("#food").val().trim();
  const bandInput = $("#band").val().trim();
  const movieInput = $("#movie").val().trim();
  const results = $("#results");
  
  //arrays
  const arrayResult = [];
  
  arrayResult.push(foodInput, bandInput, movieInput, "dipsy", "lala", "po");

  results.append("<li>" + foodInput + "</li>")
    .append("<li>" + bandInput + "</li>")
    .append("<li>" + movieInput + "</li>")
    .prepend("<li>" + arrayResult[5] + "</li>");

  console.log(arrayResult);
  });
});