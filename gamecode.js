// global variables
const audioCrowdCheer = new Audio("./resources/mixkit-cartoon-monkey-applause-103.wav");

const startTheGame = document.querySelector(".startGameButton");
const questionCardDisplay = document.querySelector(".question-card");



// Functions
const gameStartFunction = () => {
  questionCardDisplay.innerHTML = `
  <h1>WELCOME TO</h1>
  <h2>The Unspecified Name Quiz Game!</h2>
  `
  audioCrowdCheer.play();
  startTheGame.innerHTML = `<div>Chop</div>`
}




// Event Listeners
startTheGame.addEventListener("click", gameStartFunction);
