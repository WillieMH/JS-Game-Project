//question packs (look to import from external sheet)
const sportsEasyArry = [
  {question: "What sport is described as “the beautiful game”?", answer: "A", options: ["Football", "Golf", "Fishing"]},
  {question: "How long is the total distance of a marathon?", answer: "C", options: ["40.2miles", "25.5miles", "26.2miles"]},
  {question: "What was Mohammed Ali's original name?", answer: "B", options: ["Mohammed Clay", "Cassius Clay", "Cassius Ali"]},
  {question: "What is the maximum break you can score in snooker?", answer: "B", options: ["145", "147", "150"]},
  {question: "In football, which team has won the Champions League (formerly the European Cup) the most?", answer: "B", options: ["Barcelona", "Real Madrid", "Liverpool"]},
  {question: "Which Formula 1 driver has won the most races in the history of the sport?", answer: "B", options: ["Michael Schumacer", "Lewis Hamilton", "Ayrton Senna"]},
  {question: "Which sport uses a net, a racket, and a shuttlecock?", answer: "C", options: ["Tennis", "Squash", "Badminton"]},
  {question: "What two teams play in “El Clasico”?", answer: "C", options: ["Ath. Madrid & Real Madrid", "AC Milan & Inter Milan", "Barcelona & Real Madrid"]},
  {question: "What is the name Tyson Fury calls himself?", answer: "C", options: ["The Whirlwind", "The Tornado", "Gypsy King"]},
  {question: "Which country did F1 legend Ayrton Senna come from?", answer: "C", options: ["Spain", "Italy", "Brazil"]},
  ];
  const sportsMediumArry =[
    {question: "Which country won the first ever football world cup?", answer: "B", options: ["Brazil", "Uruguay", "France"]},
    {question: "How many gold medals has Usain Bolt won?", answer: "A", options: ["8", "7", "6"]},
    {question: "What five colours make up the Olympic rings?", answer: "C", options: ["Red, yellow, green, white & blue", "Blue, red, green, yellow & purple", "Blue, black, green, red & yellow"]},
    {question: "Who has won more tennis grand slam titles, Venus Williams or Serena Williams?", answer: "B", options: ["Venus", "Serena", "Tied"]},
    {question: "Which country won the first ever rugby world cup?", answer: "A", options: ["New Zealand", "Australia", "South Africa"]},
    {question: "In which sport would competitors use a piece of equipment known as a foil?", answer: "B", options: ["Triathalon", "Fencing", "Fishing"]},
    {question: "In which sport do teams compete to win the Stanley Cup?", answer: "C", options: ["American Football", "Basketball", "Ice Hockey"]},
    {question: "What international rugby team are known as the Pumas?", answer: "B", options: ["Uruguay", "Argentina", "Paraguay"]},
    {question: "At which Olympics did Kelly Holmes win two gold medals?", answer: "A", options: ["Athens 2004", "Sydney 2000", "Beijing 2008"]},
    {question: "Won who the last cricket world cup?", answer: "England", options: ["India", "West Indies", "England"]}
  ]
  const sportsHardArry = [
    {question: "How many regulation strokes are there in swimming?", answer: "A", options: ["Four", "Two", "Six"]},
    {question: "What is his world record time for the 100 metres?", answer: "A", options: ["9.58secs", "9.48secs", "9.53sec"]},
    {question: "What is the only sport to be played on the moon?", answer: "A", options: ["Golf", "American Football", "Tennis"]},
    {question: "How many NBA championships did Michael Jordan win with the Chicago Bulls?", answer: "C", options: ["4", "5", "6"]},
    {question: "The Chicago Cubs and Boston Red Sox play which sport?", answer: "A", options: ["Baseball", "Basketball", "American Football"]},
    {question: "Who is the Premier League's all-time top scorer?", answer: "A", options: ["Alan Shearer", "Michael Owen", "Iain Wright"]},
    {question: "Which course is The Masters golf tournament held?", answer: "A", options: ["Augusta National Golf Club", "Pine Valley", "Pebble Beach"]},
    {question: "Which sport involves tucks and pikes?", answer: "B", options: ["Fishing", "Diving", "Horse Dresage"]},
    {question: "What is Canada's national sport?", answer: "B", options: ["Ice Hockey", "Lacrosse", "Baseball"]},
    {question: "How many players are there in a rugby league team?", answer: "C", options: ["15", "14", "13"]}
  ]

// global variables
    // Object for handling questions
const questionHandler = {
  easyQuestion: null,
  easyQAnswer: null,
  easyQOption1: null,
  easyQOption2: null,
  easyQOption3: null,
  medQuestion: null,
  medQAnswer: null,
  medQOption1: null,
  medQOption2: null,
  medQOption3: null,
  hardQuestion: null,
  hardQAnswer: null,
  hardQOption1: null,
  hardQOption2: null,
  hardQOption3: null,
};

const audioCrowdCheer = new Audio("./resources/mixkit-cartoon-monkey-applause-103.wav");
const audiodrumRoll = new Audio("./resources/drum-roll-105602.mp3");


//queries
const questionCardDisplay = document.querySelector(".display");
const startTheGame = document.querySelector(".startHere");
const catChoiceSports = document.querySelector(".category-choice__one");
const catChoiceFilm = document.querySelector(".category-choice__two");
const catChoiceScience = document.querySelector(".category-choice__three");
const catChoiceJava = document.querySelector(".category-choice__four");
const answerA = document.querySelector(".ButtonA");
const answerB = document.querySelector(".ButtonB");
const answerC = document.querySelector(".ButtonC");



// Functions
    //Initial Screen
const welcomeMessage = () => {
  questionCardDisplay.innerHTML = `
  <h1>WELCOME TO</h1>
  <h2>The Quiz in a Phone Box!</h2>
  <h3>CLICK START TO PLAY</h3>
  `
};

    //First Action
const gameBegins = () => {
  console.log("Game has begun!");
  questionCardDisplay.innerHTML = `
  <h1>HERES THE RULES</h1>
  <h2>Answer Right</h2>
  <h3>Win Prizes</h3>
  <h3>Pick a category to start!</h3>
  `
  document.getElementById("startButton_show").className = "startButton_hide";
  document.getElementById("catBoard").className = "category-choice";
  audioCrowdCheer.play();
};

    //Category Selected
const catPlaySports =() => {
  questionCardDisplay.innerHTML = `
  <h1>YOU'VE CHOOSEN SPORTS</h1>
  <h2>Here is your first question for 5pts</h2>
  `
  document.getElementById("catBut1").className = "category-choice__one--unlit";
  document.getElementById("catBoard").className = "category-choice-hidden";
  loadQuestions(); //loadQuestions = this is sports q only, need to rename to cat.
  audiodrumRoll.play();
  setTimeout(playQuestionOne, 2500);

}

const catPlayFilm =() => {
  questionCardDisplay.innerHTML = `
  <h1>YOU'VE CHOOSEN TV & FILM</h1>
  <h2>Here is your first question for 5pts</h2>
  `
  document.getElementById("catBut2").className = "category-choice__two--unlit";
  document.getElementById("catBoard").className = "category-choice-hidden";
  loadQuestions();
}

const catPlayScience =() => {
  questionCardDisplay.innerHTML = `
  <h1>YOU'VE CHOOSEN SCIENCE & NATURE</h1>
  <h2>Here is your first question for 5pts</h2>
  `
  document.getElementById("catBut3").className = "category-choice__three--unlit";
  document.getElementById("catBoard").className = "category-choice-hidden";
  loadQuestions();
}

const catPlayJava =() => {
  questionCardDisplay.innerHTML = `
  <h1>YOU'VE CHOOSEN JAVASCRIPT</h1>
  <h2>Here is your first question for 5pts</h2>
  `
  document.getElementById("catBut4").className = "category-choice__four--unlit";
  document.getElementById("catBoard").className = "category-choice-hidden";
  loadQuestions();
}

    //Load questions
const setEasyQuestions = () => {
      const randomQuestionChooser = Math.floor(Math.random() *10);
      const questionEasy = (sportsEasyArry[randomQuestionChooser]);
      questionHandler.easyQuestion = questionEasy.question;
      questionHandler.easyQAnswer = questionEasy.answer;
      questionHandler.easyQOption1 = questionEasy.options[0];
      questionHandler.easyQOption2 = questionEasy.options[1];
      questionHandler.easyQOption3 = questionEasy.options[2];
};
      
const setMediumQuestions = () => {
      const randomQuestionChooserMed = Math.floor(Math.random() *10);
      const questionMed = (sportsMediumArry[randomQuestionChooserMed]);
      questionHandler.medQuestion = questionMed.question;
      questionHandler.medQAnswer = questionMed.answer;
      questionHandler.medQOption1 = questionMed.options[0];
      questionHandler.medQOption2 = questionMed.options[1];
      questionHandler.medQOption3 = questionMed.options[2];
};
      
const setDifficultQuestions = () => {
      const randomQuestionChooserDif = Math.floor(Math.random() *10); //this bit works
      const questionHard = (sportsHardArry[randomQuestionChooserDif]); //this bit works
      questionHandler.hardQuestion = questionHard.question; //this bit works
      questionHandler.hardQAnswer = questionHard.answer;
      questionHandler.hardQOption1 = questionHard.options[0];
      questionHandler.hardQOption2 = questionHard.options[1];
      questionHandler.hardQOption3 = questionHard.options[2];
};

      //Master function for question load
const loadQuestions = () => {
  setEasyQuestions();
  setMediumQuestions();
  setDifficultQuestions();
};

// Gameplay
      // Display Question One
const playQuestionOne = () => {
  questionCardDisplay.innerHTML = `
  <h1>QUESTION 1</h1>
  <h2>${questionHandler.easyQuestion}</h2>
  `
  document.getElementById("questions").className = "questionDisplay";
  answerA.innerHTML = `A) ${questionHandler.easyQOption1}`;
  answerB.innerHTML = `B) ${questionHandler.easyQOption2}`;
  answerC.innerHTML = `C) ${questionHandler.easyQOption3}`;
}

// Event Listeners
window.onload = welcomeMessage;
startTheGame.addEventListener("click", gameBegins);
catChoiceSports.addEventListener("click", catPlaySports);
catChoiceFilm.addEventListener("click", catPlayFilm);
catChoiceScience.addEventListener("click", catPlayScience);
catChoiceJava.addEventListener("click", catPlayJava);




// *** resources for later ***
