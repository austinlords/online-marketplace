var orderCost;

// cost of shoes in USD. Must have two decimal points
var redShoeCost = 99.00;
var blackShoeCost = 79.00;
var whiteShoeCost = 69.00;
var greenShoeCost = 89.00;

$(document).ready(function() {

  $("#redShoeCost").html(redShoeCost);
  $("#blackShoeCost").html(blackShoeCost);
  $("#whiteShoeCost").html(whiteShoeCost);
  $("#greenShoeCost").html(greenShoeCost);

  // select redShoe
  $("#redShoeRadio").click(function() {
    var orderCost = redShoeCost;
    $(".totalCost").html(orderCost);
  });

  // select blackShoe
  $("#blackShoeRadio").click(function() {
    var orderCost = blackShoeCost;
    $(".totalCost").html(orderCost);
  });

  // select whiteShoe
  $("#whiteShoeRadio").click(function() {
    var orderCost = whiteShoeCost;
    $(".totalCost").html(orderCost);
  });

  // select greeenShoe
  $("#greenShoeRadio").click(function() {
    var orderCost = greenShoeCost;
    $(".totalCost").html(orderCost);
  });


});
