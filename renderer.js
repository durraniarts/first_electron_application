function getTime() {
  let time = new Date().toLocaleTimeString();
  document.getElementById("time").innerHTML = time;
}

setInterval(getTime, 1000);
