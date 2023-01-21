// Getting the date today.
var todayDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").html(todayDate);

// Reminder Referrence: https://learn.jquery.com/using-jquery-core/document-ready/
$(window).on("load", function(){

// Testing what is the difference?
// $(document).ready(function(){

  // Manipulate save button by calling class .saveBtn click listener
  // Adding inside function for saveBtn and description values.
  $(".saveBtn").on("click", function(){
    // Reference: https://api.jquery.com/siblings/ for getting text of the .description (remember)
    var text = $(this).siblings(".description").val();
    // console.log($(this).siblings(".description").val());
    var time = $(this).parent().attr("id");
    // console.log($(this).parent());
  })

  function trackSchedule(){
    // Get the time now.
    var currentTime = moment().hour();
    // console.log(moment().hour()); (Working)

    // https://api.jquery.com/each/
    // https://www.tutorialrepublic.com/faq/how-to-get-the-id-of-an-element-using-jquery.php
    // Get the div for time. class "time-block".

    // Need to figure out how to extract the number from the div class time-block.
    $(".time-block").each(function(){
      // https://www.freecodecamp.org/news/parseint-in-javascript-js-string-to-int-example/
       // Need to figure out how to extract the number from the div class time-block.
      var timeBlock = parseInt($(this).attr("id").split("time")[1]);

      // Reminder, dont use "." when removing and adding class.

      // If Div class time-block is less than currentTime (moment) then it is past.
      // removes color of present and future.
      if (timeBlock < currentTime){
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
      // If Div class time-block is equal than currentTime (moment) then it is present.
      // removes color of past and future.
      else if (timeBlock === currentTime){
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past"); 
      }
      else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    })
  }
  trackSchedule();
})

