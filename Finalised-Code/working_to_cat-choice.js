// global variables
const audioCrowdCheer = new Audio("./resources/mixkit-cartoon-monkey-applause-103.wav");


//queries
const questionCardDisplay = document.querySelector(".display");
const startTheGame = document.querySelector(".startHere");
const catChoiceSports = document.querySelector(".category-choice__one");
const catChoiceFilm = document.querySelector(".category-choice__two");
const catChoiceScience = document.querySelector(".category-choice__three");
const catChoiceJava = document.querySelector(".category-choice__four");



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
  <h3>Pick a category to start!</h3>
  `
  document.getElementById("startButton_show").className = "startButton_hide";
  audioCrowdCheer.play();
};

const catPlaySports =() => {
  questionCardDisplay.innerHTML = `
  <h1>YOU'VE CHOOSEN SPORTS</h1>
  <h2>Here is your first question for 5pts</h2>
  `
  document.getElementById("catBut1").className = "category-choice__one--unlit";
  // document.getElementById("startButton_show").className = "startButton_hide";
}

const catPlayFilm =() => {
  questionCardDisplay.innerHTML = `
  <h1>YOU'VE CHOOSEN TV & FIL<</h1>
  <h2>Here is your first question for 5pts</h2>
  `
  document.getElementById("catBut2").className = "category-choice__two--unlit";
  // document.getElementById("startButton_show").className = "startButton_hide";
}

const catPlayScience =() => {
  questionCardDisplay.innerHTML = `
  <h1>YOU'VE CHOOSEN SCIENCE & NATURE</h1>
  <h2>Here is your first question for 5pts</h2>
  `
  document.getElementById("catBut3").className = "category-choice__three--unlit";
  // document.getElementById("startButton_show").className = "startButton_hide";
}

const catPlayJava =() => {
  questionCardDisplay.innerHTML = `
  <h1>YOU'VE CHOOSEN JAVASCRIPT</h1>
  <h2>Here is your first question for 5pts</h2>
  `
  document.getElementById("catBut4").className = "category-choice__four--unlit";
  // document.getElementById("startButton_show").className = "startButton_hide";
}


// Event Listeners
window.onload = welcomeMessage;
startTheGame.addEventListener("click", gameBegins);
catChoiceSports.addEventListener("click", catPlaySports);
catChoiceFilm.addEventListener("click", catPlayFilm);
catChoiceScience.addEventListener("click", catPlayScience);
catChoiceJava.addEventListener("click", catPlayJava);




// *** resources for later ***
