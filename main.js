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

var dataHour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

// Build the schedule by row
for (var i = 0; i < timeSlot.length; i++) {
  // Get local storage on load
  var storedInput = localStorage.getItem(timeSlot[i]);
  // Create the row
  var newRow = $("<div>");
  newRow.addClass("row");
  // Turn the hours into number values
  var hourCurrent = parseInt(moment().format("H"));
  var numbers = parseInt(dataHour[i]);
  // Time section of row
  var timeBlock = $("<div>");
  timeBlock.addClass("col-sm-1 hour time-block");
  timeBlock.text(timeSlot[i]);
  // Input Section of row
  var input = $("<input>");
  input.addClass("col-lg-10");
  input.attr("data-value", timeSlot[i]);
  input.attr("data-hour", timeSlot[i]);
  // Puts the stored text into the rows
  input.val(storedInput);
  // Changes the color of the rows according to the time
  if (hourCurrent > numbers) {
    input.addClass("past");
  } else if (hourCurrent === numbers) {
    input.addClass("present");
  } else {
    input.addClass("future");
  }
  // Button section of row
  var btn = $("<button>", {
    type: "button",
    value: timeSlot[i],
    // Sets an onclick event to save data to local storage then pla
    on: {
      click: function saveToLocal() {
        var el = $("input[data-value='" + this.value + "']");
        var selectedHour = el.data("hour");
        if (el) {
          var inputText = el.val();
          localStorage.setItem(selectedHour, inputText);
        }
      },
    },
  });
  btn.addClass("col-sm-1 saveBtn");
  // Adding i tags for font awesome
  var font = $("<i>");
  font.addClass("fas fa-save");
  // Add sections to row
  newRow.append(timeBlock);
  newRow.append(input);
  newRow.append(btn);
  btn.append(font);
  // Add row to schedule
  schedule.append(newRow);
}
