//your JS code here. If required.
function updateTimer() {
    let timer = document.getElementById("timer");
    let now = new Date();

    timer.textContent = now.toLocaleString();
}

updateTimer();

setInterval(updateTimer, 1000);
