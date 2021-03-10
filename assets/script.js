var timeDisplayEl = $('#time-display');
var hour = moment().format('HH');
var nineAm = 9
var tenAm = 10
var elevenAm = 11
var twelvePm = 12
var thirteenPm = 13
var fourteenPm = 14
var fifteenPm = 15
var sixteenPm = 16
var seventeenPm = 17

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

// 9am backgound color
if (hour < nineAm) {
  $("#hour-9").addClass("future");
}else if (hour == nineAm) {
  $("#hour-9").addClass("present");
} else if (hour > nineAm) {
  $("#hour-9").addClass("past");
} 

// 10am backgound color
if (hour < tenAm) {
  $("#hour-10").addClass("future");
}else if (hour == tenAm) {
  $("#hour-10").addClass("present");
}else if (hour > tenAm) {
  $("#hour-10").addClass("past");
} 

// 11am background color
if (hour < elevenAm) {
  $("#hour-11").addClass("future");
}else if (hour == elevenAm) {
  $("#hour-11").addClass("present");
}else if (hour > elevenAm) {
  $("#hour-11").addClass("past");
} 

// 12pm background color
if (hour < twelvePm) {
  $("#hour-12").addClass("future");
}else if (hour == twelvePm) {
  $("#hour-12").addClass("present");
}else if (hour > twelvePm) {
  $("#hour-12").addClass("past");
} 

// 1pm background color
if (hour < thirteenPm) {
  $("#hour-13").addClass("future");
}else if (hour == thirteenPm) {
  $("#hour-13").addClass("present");
}else if (hour > thirteenPm) {
  $("#hour-13").addClass("past");
} 

// 2pm background color
if (hour < fourteenPm) {
  $("#hour-14").addClass("future");
}else if (hour == fourteenPm) {
  $("#hour-14").addClass("present");
}else if (hour > fourteenPm) {
  $("#hour-14").addClass("past");
} 

//3pm background color 
if (hour < fifteenPm) {
  $("#hour-15").addClass("future");
}else if (hour == fifteenPm) {
  $("#hour-15").addClass("present");
}else if (hour > fifteenPm) {
  $("#hour-15").addClass("past");
} 

// 4pm backgound color
if (hour < sixteenPm) {
  $("#hour-16").addClass("future");
}else if (hour == sixteenPm) {
  $("#hour-16").addClass("present");
}else if (hour > sixteenPm) {
  $("#hour-16").addClass("past");
} 

 // 5pm background color
  if (hour < seventeenPm) {
    $("#hour-17").addClass("future");
  }  else if (hour == seventeenPm) {
    $("#hour-17").addClass("present");
  }  else if (hour > seventeenPm) {
    $("#hour-17").addClass("past");
  } 


