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
  timeBlock.addClass("col-sm-1 hour time-block");
  timeBlock.text(timeSlot[i]);
  // Input Section of row
  var input = $("<input>");
  input.addClass("col-lg-10 input");
  input.attr("data-value", timeSlot[i]);
  // Button section of row
  var btn = $("<button>", {
    type: "button",
    value: timeSlot[i],
    on: {
      click: function saveToLocal() {
        var el = $("input[data-value='" + this.value + "']");
        if (el) {
          var inputText = el.val();
          localStorage.setItem("appt", JSON.stringify(inputText));
          saveToScreen();
        }
      },
    },
  });
  btn.addClass("col-sm-1 saveBtn");
  // Add sections to row
  newRow.append(timeBlock);
  newRow.append(input);
  newRow.append(btn);
  // Add row to schedule
  schedule.append(newRow);
}

function rowColor() {
  var hourCurrent = moment().format("hA");
  var current = $("input").attr("data-value");
  var allRows = $("input");
  if (hourCurrent > current) {
    allRows.addClass("past");
  } else if (hourCurrent < current) {
    allRows.addClass("future");
  } else {
    allRows.addClass("present");
  }
}
rowColor();


function saveToScreen(event) {
  // event.preventDefault();
  var storedAppt = localStorage.getItem("appt");

  if (input !== null) {
    inputText = JSON.parse(storedAppt);
    input.text = inputText
  }
}
