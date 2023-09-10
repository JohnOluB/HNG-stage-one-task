// const dayE1 = document.querySelector(".day");
// const time = document.querySelector(".time");

var today = new Date();
var day = today.getDay();

var dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

document.querySelector(".today").innerHTML =
  "Current Day of the week: " + dayList[day];
console.log("Current Day of the week: " + dayList[day]);

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === "PM") {
  if (minute === 0 && second === 0 && millisecond === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}
if (hour === 0 && prepand === " AM ") {
  hour = 12;
  prepand = "Midnight";
} else {
  hour = 12;
  prepand = " AM";
}
document.querySelector(".time").innerHTML = 
console.log(
  "Current time: " +
    hour +
    prepand +
    " : " +
    minute +
    " : " +
    second +
    " : " +
    millisecond
);

// const date = new Date();
// const milliseconds = date.getMilliseconds();
// console.log(milliseconds);
// const day = dayE1.getDay();
