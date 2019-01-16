// variable that will be assigned to a Timeout
var clockUpdate;

// adds a zero to a number that is smaller than 10
function addZero(i){
  if (i < 10) {i = "0" + i};
  return i;
}

// stops / resumes the clock
function stopResumeClock() {
  var button = document.getElementById("clockButton")
  if(button.value == "Stop") button.value = "Resume", clearTimeout(clockUpdate);
  else button.value = "Stop", clockUpdate = setTimeout(startClock, 300);
}

// clock setup
function startClock(){
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  document.getElementById('fullClock').innerHTML =
  hours + ":" + minutes + ":" + seconds;
  clockUpdate = setTimeout(startClock, 1000/3);
  document.getElementById("clockButton").addEventListener("click", function(){ stopResumeClock(); });
}

window.onload = startClock;
