$("h1").css("color","blue").addClass("big-heading");

$("button").html("<em>hi<em>");
$("a").attr("href","https:www.yahoo.com");
//document.querySelector("a").setAttribute("href","https:www.yahoo.com");

// $(document).keypress(function(event) {
//
//   $("h1").text(event.key);
//
// });

$("button").on("click",function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});

})
