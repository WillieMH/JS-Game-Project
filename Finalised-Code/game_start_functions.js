// global variables
const audioCrowdCheer = new Audio("./resources/mixkit-cartoon-monkey-applause-103.wav");


//queries
const questionCardDisplay = document.querySelector(".display");
const startTheGame = document.querySelector(".startHere");




// Functions
const welcomeMessage = () => {
  questionCardDisplay.innerHTML = `
  <h1>WELCOME TO</h1>
  <h2>The Quiz in a Phone Box!</h2>
  <h3>CLICK START TO PLAY</h3>
  `
};

const gameBegins = () => {
  console.log("Game has begun!");
  questionCardDisplay.innerHTML = `
  <h1>HERES THE RULES</h1>
  <h2>Answer Right</h2>
  <h3>Win Prizes</h3>
  `
  document.getElementById("startButton_show").className = "startButton_hide";
  audioCrowdCheer.play();
};





// Event Listeners
window.onload = welcomeMessage;
startTheGame.addEventListener("click", gameBegins);




// *** resources for later ***
