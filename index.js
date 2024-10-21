let clickCount = 0;
let startTime;
let timerRunning = false;

function startTest() {
    if (!timerRunning) {
        clickCount = 0;
        document.getElementById('clickCount').textContent = "Clicks: 0";
        document.getElementById('cps').textContent = "CPS: 0";

        timerRunning = true;
        startTime = new Date().getTime();
        document.getElementById('startButton').textContent = "Click Me!";

        setTimeout(endTest, 1000); 
    }
    document.body.onclick = countClick;
}

function countClick() {
    if (timerRunning) {
        clickCount++;
        document.getElementById('clickCount').textContent = "Clicks: " + clickCount;
    }
}

function endTest() {
    timerRunning = false;
    document.body.onclick = null;
    const endTime = new Date().getTime();
    const timeDiff = (endTime - startTime) / 1000; 
    const cps = clickCount / timeDiff;
    document.getElementById('cps').textContent = "CPS: " + cps.toFixed(2);
    document.getElementById('startButton').textContent = "Click Here to Start";
}
