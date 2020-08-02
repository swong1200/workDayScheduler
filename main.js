// Moment JS to show day
var now = moment().format("dddd, MMMM Do")
var currentDay = $("#currentDay")
currentDay.append(now)

// Div to append to 
var schedule = $("#schedule");
// Array for hours of the day
var timeSlot = [
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];

function rowBuilder() {
  // Build the schedule by row
  for (var i = 0; i < timeSlot.length; i++) {
    var newRow = $("<div>");
    newRow.addClass("row hour");
    // newRow.data("hour", hour); bug here; need to figure out how to add data value
    // Time section of row
    var timeBlock = $("<div>");
    timeBlock.addClass("col-sm-2 time-block");
    timeBlock.text(timeSlot[i]);
    // Input Section of row
    var input = $("<span>");
    input.addClass("col-lg-9");
    // Button section of row
    var btn = $("<button>");
    btn.addClass("col-sm-1 saveBtn");
    // Add sections to row
    newRow.append(timeBlock);
    newRow.append(input);
    newRow.append(btn);
    // Add row to schedule
    schedule.append(newRow);
  }
}
rowBuilder();