const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const time = document.getElementById("time");
const gameOverMessage = document.getElementById("gameOver");
const gameOverScore = document.getElementById("gameOverScore");

const scoreDisplay = document.getElementById("scoreValue");
const startBtn = document.getElementById("startBtn");
let hitPosition;
let score = 0;
let countDownTimerId;
let currentTime = 20
let timerId;

function randomMole() {
  moles.forEach((mole) => {
    mole.classList.remove("up");
    mole.style.backgroundImage = 'url("yoda1.png")';
    mole.style.pointerEvents = "all";
  });
  let randomizeMole = Math.floor(Math.random() * moles.length);
  moles[randomizeMole].classList.add("up");
  hitPosition = moles[randomizeMole]
}
moles.forEach((mole) => {
  mole.addEventListener("pointerdown", () => {
    mole.style.backgroundImage = 'url("yoda2.png")';
    score += 10
    scoreDisplay.innerHTML = score
    mole.style.pointerEvents = "none";
  });
});

function moveMole() {
  timerId = null;
  timerId = setInterval(randomMole, 1500);
}
moveMole();
function countdown(){
  currentTime--
  time.innerHTML = currentTime
  gameOverScore.innerHTML = score
  if(currentTime <= 0){
     gameOverMessage.classList.add("show");
    clearInterval(countDownTimerId)
    clearInterval(timerId)
     
  }
}

countDownTimerId = setInterval(countdown, 1000)

startBtn.addEventListener('pointerdown',() => {
  location.reload();
})

