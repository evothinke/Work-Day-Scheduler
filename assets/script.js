//making the html id #currentDay show the current date and time
setInterval(() => $("#currentDay").text(moment().format("dddd, MMM Do, h:mm:ss a")), 1000);
//declaring a variable and assigning it the current hour by parsing it using the parseInt Method
let currentHour = parseInt(moment().hours());
//initializing variable timeBlockHour
var timeBlockHour  = 0;

//declaring an array of elements that will be assigned then retrieved to/from each field in 
//the localStorage and making sure the process happens after the page finished to load
$(document).ready(function() {
  [8,9,10,11,12,13,14,15,16,17,18].forEach(field => $("#" + field).val(localStorage.getItem(field)));
});

//button clicked event listener. When a "saveBtn" is clicked, it gets the ID of the corresponding input field, 
//saves the input field's value to local storage using the ID as the key.
$(".saveBtn").click(function () {
  var btnHourId = $(this).attr("btnHour-Id");
  localStorage.setItem(btnHourId, $("#" + btnHourId).val());
  console.log(localStorage);
  console.log($("#" + btnHourId).val());
});

//function for changing color based on the hour. We have three classes that get attributed to specific elements. 
//It is past if the current time is greater than timeblockhour
//it is present if both are strictly equal
//it is future if currenthour is smaller than the timeBlockHour
//the functions uses the id to know exactly which position it is on and the .timeblock class to target the correct element.
//this is done dinamically so we dont have to write if statements for each individual hour.

$(function changeColors() {
  var currentHour = dayjs().hour();

  $(".time-block").each(function() {
    timeBlockHour = parseInt($(this).attr("id").substring($(this).attr("id").length - 2));

    console.log(timeBlockHour);

    $(this).toggleClass("past", timeBlockHour < currentHour);
    $(this).toggleClass("present", timeBlockHour === currentHour);
    $(this).toggleClass("future", timeBlockHour > currentHour);
  });
});
