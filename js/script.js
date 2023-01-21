// Getting the date today.
var todayDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").html(todayDate);

// Reminder Referrence: https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
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
  // 
    var currentTime = moment().hour();
    // console.log(moment().hour()); (Working)
  }
})






