setInterval(() => $("#currentDay").text(moment().format("dddd, MMM Do, h:mm:ss a")), 1000);
let currentHour = parseInt(moment().hours());
var timeBlockHour  = 0;


$(document).ready(function() {
  [8,9,10,11,12,13,14,15,16,17].forEach(field => $("#" + field).val(localStorage.getItem(field)));
});

$(".saveBtn").click(function () {
  var dataHour = $(this).attr("data-hour");
  localStorage.setItem(dataHour, $("#" + dataHour).val());
  console.log(localStorage);
  console.log($("#" + dataHour).val());
});
$(function() {
  var currentHour = dayjs().hour();

  $(".time-block").each(function() {
    timeBlockHour = parseInt($(this).attr("id").substring($(this).attr("id").length - 2));

    console.log(timeBlockHour);

    $(this).toggleClass("past", timeBlockHour < currentHour);
    $(this).toggleClass("present", timeBlockHour === currentHour);
    $(this).toggleClass("future", timeBlockHour > currentHour);
  });
});
