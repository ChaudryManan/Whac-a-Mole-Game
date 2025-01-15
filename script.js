let square = document.querySelectorAll(".square");
let score = document.querySelector("#score");
let timeLeft = document.querySelector("#time-left");

let hitPosition;
let result = 0;
let time = 60;
let timerId, countDownTimerId;

function randomSquare() {
    square.forEach(element => {
        element.classList.remove("mole");
    });

    let squareRandom = square[Math.floor(Math.random() * square.length)];
    squareRandom.classList.add("mole");
    hitPosition = squareRandom.id;
}

function moveMole() {
    timerId = setInterval(randomSquare, 500);
}

square.forEach(element => {
    element.addEventListener("mousedown", () => {
        if (element.id === hitPosition) {
            result++;
            score.textContent = result; // Update the score
            hitPosition = null; // Reset the hit position to prevent multiple clicks
        }
    });
});

function countdown() {
    time--;
    timeLeft.textContent = time;

    if (time === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert(`Game over! Your final score is ${result}`);
    }
}

moveMole();
countDownTimerId = setInterval(countdown, 1000);
