console.log(
  "If you're reading this check me out on Linkedin(click the word 'Digital Clock')"
);

function getTime() {
  let timeTag = document.getElementById('time');
  let time = new Date().toLocaleTimeString();
  timeTag.innerHTML = time;
}

function talk() {
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();
  var msg = new SpeechSynthesisUtterance(
    `The time is ${hours} and ${minutes} minutes`
  );
  window.speechSynthesis.speak(msg);
}

function getDate() {
  let dateTag = document.getElementById('date');
  let date = new Date().toLocaleDateString();
  dateTag.innerHTML = date;
}

setInterval(function timer() {
  getDate();
  getTime();
}, 1000);
