// Moment JS to show day
var now = moment().format("dddd, MMMM Do");
var currentDay = $("#currentDay");
currentDay.append(now);

// Div to append to
var schedule = $("#schedule");
// Array for hours of the day
var timeSlot = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

// Build the schedule by row
for (var i = 0; i < timeSlot.length; i++) {
  var newRow = $("<div>");
  newRow.addClass("row");
  // Time section of row
  var timeBlock = $("<div>");
  timeBlock.addClass("col-sm-2 time-block");
  timeBlock.text(timeSlot[i]);
  // Input Section of row
  var input = $("<input>");
  input.addClass("col-lg-9 hour");
  input.attr("data-value", timeSlot[i]);
  // Button section of row
  var btn = $("<button>");
  btn.addClass("col-sm-1 saveBtn");
  btn.attr("data-value", timeSlot[i])
  btn.text("Save");
  // Add sections to row
  newRow.append(timeBlock);
  newRow.append(input);
  newRow.append(btn);
  // Add row to schedule
  schedule.append(newRow);
}


function rowColor() {
  var hourCurrent = moment().format("hA");
  var current = $("input").attr("data-value")
  var allRows = $("input")
  if (hourCurrent > current) {
    allRows.addClass("past");
  } else if (hourCurrent < current){
    allRows.addClass("future")
  } else {
    allRows.addClass("present")
  }
}
rowColor()

$("button").click(function(event) {
  event.preventDefault();

  var appointment = input.text;
  var inputData = input.attr("data-value");
  var buttonData = btn.attr("data-value");

  if (inputData === buttonData){
    localStorage.setItem("input", appointment)
  }
});
