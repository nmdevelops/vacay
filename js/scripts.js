//back-end logic












//front-end logic
$(document).ready(function() {

  $("button#rightButton").click(function() {
    $("body").removeClass();
    $("body").addClass("bg-image-2");
    $(".titleText").hide();
    $(".interview").show();
  });

  $(".interview form").submit(function(event) {
    $("body").removeClass();
    $("body").addClass("bg-image-3");
    $(".interview").hide();
    $(".titleText").hide();
    $(".cycleTour").show();

    event.preventDefault();
  });
});
