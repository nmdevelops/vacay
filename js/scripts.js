//back-end logic
var conditional = function(travelMode, travelTime, transportBudget) {
  if (travelMode === "cruiseShip") {
    $("body").removeClass();
    $("body").addClass("bg-image-lameCation");
    $(".interview").hide();
    $(".titleText").hide();
    $(".lameCation").show();
  } else if (travelMode === "feet" && travelTime <= "3") {
    $("body").removeClass();
    $("body").addClass("bg-image-stayCation");
    $(".interview").hide();
    $(".titleText").hide();
    $(".stayCation").show();
  } else if ( travelMode === "bike" && travelTime <= "10") {
    $("body").removeClass();
    $("body").addClass("bg-image-stayCation");
    $(".interview").hide();
    $(".titleText").hide();
    $(".stayCation").show();
  } else if ( travelMode === "bike" && travelTime > "10") {
    $("body").removeClass();
    $("body").addClass("bg-image-cycleCation");
    $(".interview").hide();
    $(".titleText").hide();
    $(".cycleCation").show();
  } else if ( travelMode === "motorBike" && travelTime <= "10") {
    $("body").removeClass();
    $("body").addClass("bg-image-motoCation");
    $(".interview").hide();
    $(".titleText").hide();
    $(".motoCation").show();
  } else if ( travelMode === "motorBike" && travelTime > "10") {
    $("body").removeClass();
    $("body").addClass("bg-image-motoCation");
    $(".interview").hide();
    $(".titleText").hide();
    $(".motoCation").show();
  } else if (travelMode === "plane" && travelTime <= "3") {
    $("body").removeClass();
    $("body").addClass("bg-image-stayCation");
    $(".interview").hide();
    $(".titleText").hide();
    $(".stayCation").show();
  }
}
//alert ("begin time fuck")
var timeToDo = function (travelTime) {
  var timeTo;
  if (travelTime <= "3" && travelMode === "feet") {
   timeTo = ("TAKE A 16 MILE HIKE!");
 } else if (travelTime <= "10" && travelMode === "motorBike") {
  timeTo = ("GO ON A ROAD TRIP!");
 }
}









//front-end logic
$(document).ready(function() {

  $("button#rightButton").click(function() {
    $("body").removeClass();
    $("body").addClass("bg-image-2");
    $(".titleText").hide();
    $(".interview").fadeIn(2400);
  });

  $(".interview form").submit(function(event) {
    var travelMode = $("input:radio[name=travelMode]:checked").val();
    var travelTime = $("select#travelTime").val();
    var travelBudget = $("select#transportBudget").val();
    conditional(travelMode, travelTime, transportBudget);
    console.log(travelMode);
    console.log(travelTime);
    console.log(travelBudget);
    //timeToDo(travelTime);
    //$(".enoughTime").text(timeTo);



    event.preventDefault();
  });
});
