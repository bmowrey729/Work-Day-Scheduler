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

// 9am event save
var new9Text = document.getElementById("hour-9text")
var save9 = document.getElementById("btn9")
new9Text.value = localStorage.getItem('hour-9text')
save9.addEventListener('click', text9)
function text9(){
  localStorage.setItem("hour-9text", new9Text.value);
  console.log(new9Text.value)
}

// 10am event save
var new10Text = document.getElementById("hour-10text")
var save10 = document.getElementById("btn10")
new10Text.value = localStorage.getItem('hour-10text')
save10.addEventListener('click', text10)
function text10(){
  localStorage.setItem("hour-10text", new10Text.value);
  console.log(new10Text.value)
}

// 11am event save
var new11Text = document.getElementById("hour-11text")
var save11 = document.getElementById("btn11")
new11Text.value = localStorage.getItem('hour-11text')
save11.addEventListener('click', text11)
function text11(){
  localStorage.setItem("hour-11text", new11Text.value);
  console.log(new11Text.value)
}

// 12pm event save
var new12Text = document.getElementById("hour-12text")
var save12 = document.getElementById("btn12")
new12Text.value = localStorage.getItem('hour-12text')
save12.addEventListener('click', text12)
function text12(){
  localStorage.setItem("hour-12text", new12Text.value);
  console.log(new12Text.value)
}

// 1pm event save
var new13Text = document.getElementById("hour-13text")
var save13 = document.getElementById("btn13")
new13Text.value = localStorage.getItem('hour-13text')
save13.addEventListener('click', text13)
function text13(){
  localStorage.setItem("hour-13text", new13Text.value);
  console.log(new13Text.value)
}

// 2pm event save
var new14Text = document.getElementById("hour-14text")
var save14 = document.getElementById("btn14")
new14Text.value = localStorage.getItem('hour-14text')
save14.addEventListener('click', text14)
function text14(){
  localStorage.setItem("hour-14text", new14Text.value);
  console.log(new14Text.value)
}

// 3pm event save
var new15Text = document.getElementById("hour-15text")
var save15 = document.getElementById("btn15")
new15Text.value = localStorage.getItem('hour-15text')
save15.addEventListener('click', text15)
function text15(){
  localStorage.setItem("hour-15text", new15Text.value);
  console.log(new15Text.value)
}

// 4pm event save
var new16Text = document.getElementById("hour-16text")
var save16 = document.getElementById("btn16")
new16Text.value = localStorage.getItem('hour-16text')
save16.addEventListener('click', text16)
function text16(){
  localStorage.setItem("hour-16text", new16Text.value);
  console.log(new16Text.value)
}
// 5pm event save
var new17Text = document.getElementById("hour-17text")
var save17 = document.getElementById("btn17")
new17Text.value = localStorage.getItem('hour-17text')
save17.addEventListener('click', text17)
function text17(){
  localStorage.setItem("hour-17text", new17Text.value);
  console.log(new17Text.value)
}


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


