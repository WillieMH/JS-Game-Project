//question packs (look to import from external sheet)
const sportsEasyArry = [
  {question: "What sport is described as “the beautiful game”?", answer: "A", options: ["Football", "Golf", "Fishing"]},
  {question: "What is the maximum break you can score in snooker?", answer: "B", options: ["145", "147", "150"]},
  {question: "In football, which team has won the Champions League (formerly the European Cup) the most?", answer: "B", options: ["Barcelona", "Real Madrid", "Liverpool"]},
  {question: "What two teams play in “El Clasico”?", answer: "C", options: ["Ath. Madrid & Real Madrid", "AC Milan & Inter Milan", "Barcelona & Real Madrid"]},
  {question: "Which country did F1 legend Ayrton Senna come from?", answer: "C", options: ["Spain", "Italy", "Brazil"]},
  ];
  const sportsMediumArry =[
    {question: "Which country won the first ever football world cup?", answer: "B", options: ["Brazil", "Uruguay", "France"]},
    {question: "How many gold medals has Usain Bolt won?", answer: "A", options: ["8", "7", "6"]},
    {question: "What five colours make up the Olympic rings?", answer: "C", options: ["Red, yellow, green, white & blue", "Blue, red, green, yellow & purple", "Blue, black, green, red & yellow"]},
    {question: "In which sport would competitors use a piece of equipment known as a foil?", answer: "B", options: ["Triathalon", "Fencing", "Fishing"]},
    {question: "What international rugby team are known as the Pumas?", answer: "B", options: ["Uruguay", "Argentina", "Paraguay"]},
  ];
  const sportsHardArry = [
    {question: "How many regulation strokes are there in swimming?", answer: "A", options: ["Four", "Two", "Six"]},
    {question: "Who is the Premier League's all-time top scorer?", answer: "A", options: ["Alan Shearer", "Michael Owen", "Iain Wright"]},
    {question: "Which course is The Masters golf tournament held?", answer: "A", options: ["Augusta National Golf Club", "Pine Valley", "Pebble Beach"]},
    {question: "Which sport involves tucks and pikes?", answer: "B", options: ["Fishing", "Diving", "Horse Dresage"]},
    {question: "What is Canada's national sport?", answer: "B", options: ["Ice Hockey", "Lacrosse", "Baseball"]},
  ];
const TVAndFilmEasyArry = [
  {question: "In which English seaside town was 'Fawlty Towers' set?", answer: "A", options: ["Torquay", "Newquay", "Torbay"]},
  {question: "How many contestants are on each team in 'University Challenge'?", answer: "A", options: ["Four", "Three", "Five"]},
  {question: "Who played Leonard Hofstadter in 'The Big Bang Theory'?", answer: "B", options: ["Jim Parsons", "Johnny Galecki", "Simon Helberg"]},
  {question: "Who is the alter ego of Scott Lang, as featured in the 2015 and 2018 Marvel films?", answer: "B", options: ["Spider Man", "Ant-Man", "Green Lantern"]},
  {question: "Who played Phoebe Buffay in 'Friends'?", answer: "B", options: ["Jennifer Aniston ", "Lisa Kudrow", "Courteney Cox"]},
]
const TVAndFilmMediumArry = [
  {question: "The 1986 novel 'It' by Stephen King was turned into a film in 2017. What is the name of the clown?", answer: "C", options: ["Buttons", "Calamity", "Pennywise"]},
  {question: "Who directed the film Jaws (1975)?", answer: "B", options: ["Ridley Scott", "Steven Spielberg", "James Cameron"]},
  {question: "Who played Katniss Everdeen in 'The Hunger Games' series?", answer: "A", options: ["Jennifer Lawrence", "Jennifer Aniston", "Jennifer Lopez"]},
  {question: "Who played  Rick Blaine in 'Casablanca' (1942)?", answer: "A", options: ["Humphrey Bogart", "Frank Sinatra", "Fred Astaire"]},
  {question: "Who won 'Britain's Got Talent in June 2018?", answer: "C", options: ["B Positive Choir", "Jack & Tim", "Lost Voice Guy"]},
];
const TVAndFilmHardArry = [
  {question: "Who were the four main characters in The Young Ones?", answer: "C", options: ["Alexi, Ade, Peter and Mark", "John, Ringo, Peter and Paul", "Vyvyan, Rick, Neil and Mike"]},
  {question: "From which show does the theme song start “Now this is a story all about how my life got flipped, turned upside down.”?", answer: "C", options: ["Cheers", "Beverley Hills 90210", "The Fresh Prince of Bel Air"]},
  {question: "Who got pushed into the Thames and disappeared, presumed dead, in 'Absolutely Fabulous: The Movie' (2014)?", answer: "C", options: ["Linda Evangelista", "Naomi Campbell", "Kate Moss"]},
  {question: "Who directed the film A Clockwork Orange (1971)?", answer: "A", options: ["Stanley Kubrick", "Alfred Hitchcock", "Martin Scorcese"]},
  {question: "Which film won the 'Best Picture' Oscar in the 90th Academy Awards in 2018?", answer: "A", options: ["The Shape of Water", "Darkest Hour", "Dunkirk"]},
];
const musicEasyArry = [
  {question: "Name all five members of One Direction?", answer: "B", options: ["Eric, Stan, Kyle, Cartman and Timmy", "Harry, Niall, Liam, Louis and Zayn ", "Peter, Ray, David, Henry and Mike"]},
  {question: "How many members are there in Korean boy band - BTS?", answer: "B", options: ["3", "7", "5"]},
  {question: "In which year did the Spice Girls release Wannabe?", answer: "A", options: ["1996", "1997", "1998"]},
  {question: "Will.i.am is best known for being part of which hip hop group?", answer: "A", options: ["Black Eyed Peas", "Run DMC", "Outkast"]},
  {question: "Who had a No.1 hit with “Ice Ice Baby”?", answer: "C", options: ["Kriss Kross", "Marky Mark", "Vanilla Ice"]},
];
const musicMediumArry = [
  {question: "Which singer can't stop staring at those ocean eyes?", answer: "C", options: ["Billy Ocean", "Barbara Streisand", "Billie Eilish"]},
  {question: "Who is the best-selling female artist of all time?", answer: "B", options: ["Mariah Carey", "Madonna", "Adele"]},
  {question: "Which musical is based on the 1992 film of the same name which starred and featured songs by Whitney Houston?", answer: "B", options: ["Prince of Thieves", "The Bodyguard", "Wicked"]},
  {question: "Which American hip hop duo had a 1986 hit with 'Push It'?", answer: "B", options: ["Run DMC", "Salt-N-Pepa", "Kriss Kross"]},
  {question: "The Barbadian singer Robyn Fenty is better known by her middle name of what?", answer: "C", options: ["Adele", "Beyonce", "Rihanna"]},
];
const musicHardArry = [
  {question: "Who was the original drummer for The Beatles?", answer: "A", options: ["Pete Best", "Mick Rodgers", "Peter Stone"]},
  {question: "What is the best-selling single of all-time worldwide?", answer: "B", options: ["Thriller by Michael Jackson", "White Christmas by Bing Crosby", "All I Want for Christmas by Mariah Carey"]},
  {question: "In which video did Michael Jackson first perform his famous moonwalk in 1983?", answer: "A", options: ["Billie Jean", "Thriller", "Beat It"]},
  {question: "'Children' was a 1996 instrumental hit for which DJ", answer: "A", options: ["Robert Miles", "Heidi Lawden", "Carl Craig"]},
  {question: "Which female artist had her first hit in 1957 with 'Walkin after Midnight'?", answer: "A", options: ["Patsy Cline", "Diana Ross", "Petula Clark"]},
];
const javaEasyArry = [
  {question: "What is the highest mountain in Java?", answer: "A", options: ["Semeru", "Slamet", "Sumbing"]},
  {question: "What is the capital city of Java?", answer: "B", options: ["Bandung", "Jakarta", "Semarang"]},
  {question: "What is the highest mountain in Java?", answer: "A", options: ["Semeru", "Slamet", "Sumbing"]},
  {question: "What is the capital city of Java?", answer: "B", options: ["Bandung", "Jakarta", "Semarang"]},
  {question: "What is the capital city of Java?", answer: "B", options: ["Bandung", "Jakarta", "Semarang"]},
];
const javaMediumArry = [
  {question: "How many volcanos are there on Java?", answer: "B", options: ["110", "112", "114"]},
  {question: "How many volcanos are there on Java?", answer: "B", options: ["110", "112", "114"]},
  {question: "How many volcanos are there on Java?", answer: "B", options: ["110", "112", "114"]},
  {question: "How many volcanos are there on Java?", answer: "B", options: ["110", "112", "114"]},
  {question: "How many volcanos are there on Java?", answer: "B", options: ["110", "112", "114"]},
];

const javaHardArry = [
  {question: "How many island in the world are larger than Java?", answer: "A", options: ["12", "24", "36"]},
  {question: "How many island in the world are larger than Java?", answer: "B", options: ["24", "12", "36"]},
  {question: "How many island in the world are larger than Java?", answer: "A", options: ["12", "24", "36"]},
  {question: "How many island in the world are larger than Java?", answer: "A", options: ["12", "24", "36"]},
  {question: "How many island in the world are larger than Java?", answer: "A", options: ["12", "24", "36"]},
];

// global variables
    // Object for handling questions
const questionHandler = {
  theQuestion: null,
  theAnswer: null,
  option1: null,
  option2: null,
  option3: null,
};

    // Object for handling scores
const quizGameScores = {
      roundScore: 0,
      overallGameScore: 0,
      thisQuestionPoints: 5,
};

    // Object for handling quiz information
const quizInfoHandler = {
      currentQuestionNumber: 1,
      currentRound: 0,
      roundName: "",
};

waitTime = 2800;

let currentEasyQuestionPack = null;
let currentMedQuestionPack = null;
let currentHardQuestionPack = null;

// Audio resources
const audioCrowdCheer = new Audio("./resources/mixkit-cartoon-monkey-applause-103.wav");
const audiodrumRoll = new Audio("./resources/drum-roll-105602.mp3");
const crowdAww = new Audio("./resources/wrongAnswer.mp3");
const crowdWhoop = new Audio("./resources/rightAnswer.mp3");

//queries
const questionCardDisplay = document.querySelector(".display");
const scoreboardDisplay = document.querySelector("#sbdisp");
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
const catPlaySportsQ1 =() => {
  currentEasyQuestionPack = null;
  currentEasyQuestionPack = sportsEasyArry;
  currentMedQuestionPack = sportsMediumArry;
  currentHardQuestionPack = sportsHardArry;
  setEasyQuestions();
  quizInfoHandler.roundName = "Sports"
  scoreboardDisplay.innerHTML = `This is the ${quizInfoHandler.roundName} round`

  questionCardDisplay.innerHTML = `
  <h1>YOU'VE CHOOSEN SPORTS</h1>
  <h2>Here is your first question for 5pts</h2>
  `
  document.getElementById("catBut1").className = "category-choice__one--unlit";
  document.getElementById("catBoard").className = "category-choice-hidden";
  catChoiceSports.removeEventListener("click", catPlaySportsQ1);
  audiodrumRoll.play();
  setTimeout(playQuestionOne, waitTime);
}

const catPlayFilm =() => {
  currentEasyQuestionPack = null;
  currentEasyQuestionPack = TVAndFilmEasyArry;
  currentMedQuestionPack = TVAndFilmMediumArry;
  currentHardQuestionPack = TVAndFilmHardArry;
  setEasyQuestions();
  quizInfoHandler.roundName = "TV & Film"
  scoreboardDisplay.innerHTML = `This is the ${quizInfoHandler.roundName} round`
  questionCardDisplay.innerHTML = `
  <h1>YOU'VE CHOOSEN TV & FILM</h1>
  <h2>Here is your first question for 5pts</h2>
  `
  document.getElementById("catBut2").className = "category-choice__two--unlit";
  document.getElementById("catBoard").className = "category-choice-hidden";
  catChoiceFilm.removeEventListener("click", catPlayFilm);
  audiodrumRoll.play();
  setTimeout(playQuestionOne, waitTime);
}

const catPlayScience =() => {
  currentEasyQuestionPack = null;
  currentEasyQuestionPack = musicEasyArry;
  currentMedQuestionPack = musicMediumArry;
  currentHardQuestionPack = musicHardArry;
  setEasyQuestions();
  quizInfoHandler.roundName = "Music"
  scoreboardDisplay.innerHTML = `This is the ${quizInfoHandler.roundName} round`

  questionCardDisplay.innerHTML = `
  <h1>YOU'VE CHOOSEN MUSIC</h1>
  <h2>Here is your first question for 5pts</h2>
  `
  document.getElementById("catBut3").className = "category-choice__three--unlit";
  document.getElementById("catBoard").className = "category-choice-hidden";
  catChoiceScience.removeEventListener("click", catPlayScience);
  audiodrumRoll.play();
  setTimeout(playQuestionOne, waitTime);
}

const catPlayJava =() => {
  currentEasyQuestionPack = null;
  currentEasyQuestionPack = javaEasyArry;
  currentMedQuestionPack = javaMediumArry;
  currentHardQuestionPack = javaHardArry;
  setEasyQuestions();
  quizInfoHandler.roundName = "Java"
  scoreboardDisplay.innerHTML = `This is the ${quizInfoHandler.roundName} round`
  
  questionCardDisplay.innerHTML = `
  <h1>YOU'VE CHOOSEN JAVA</h1>
  <h2>Here is your first question for 5pts</h2>
  `
  document.getElementById("catBut4").className = "category-choice__four--unlit";
  document.getElementById("catBoard").className = "category-choice-hidden";
  catChoiceJava.removeEventListener("click", catPlayJava);
  audiodrumRoll.play();
  setTimeout(playQuestionOne, waitTime);
}

    //Load questions
const setEasyQuestions = () => {
      const randomQuestionChooser = Math.floor(Math.random() *5);
      const questionEasy = (currentEasyQuestionPack[randomQuestionChooser]);
      questionHandler.theQuestion = questionEasy.question;
      questionHandler.theAnswer = questionEasy.answer;
      questionHandler.option1 = questionEasy.options[0];
      questionHandler.option2 = questionEasy.options[1];
      questionHandler.option3 = questionEasy.options[2];
};
      
const setMediumQuestions = () => {
      const randomQuestionChooserMed = Math.floor(Math.random() *5);
      const questionMed = (currentMedQuestionPack[randomQuestionChooserMed]);
      questionHandler.theQuestion = questionMed.question;
      questionHandler.theAnswer = questionMed.answer;
      questionHandler.option1 = questionMed.options[0];
      questionHandler.option2 = questionMed.options[1];
      questionHandler.option3 = questionMed.options[2];
};
      
const setDifficultQuestions = () => {
      const randomQuestionChooserDif = Math.floor(Math.random() *5); 
      const questionHard = (currentHardQuestionPack[randomQuestionChooserDif]); 
      questionHandler.theQuestion = questionHard.question;
      questionHandler.theAnswer = questionHard.answer;
      questionHandler.option1 = questionHard.options[0];
      questionHandler.option2 = questionHard.options[1];
      questionHandler.option3 = questionHard.options[2];
};

//Master function for question load - removed, need to load q round one by one


// Gameplay
      // Display Question One

const playQuestionOne = () => {
  questionCardDisplay.innerHTML = `
  <h1>QUESTION 1</h1>
  <h3>${questionHandler.theQuestion}</h3>
  `
  document.getElementById("questions").className = "questionDisplay";
  answerA.innerHTML = `A) ${questionHandler.option1}`;
  answerB.innerHTML = `B) ${questionHandler.option2}`;
  answerC.innerHTML = `C) ${questionHandler.option3}`;
}

const playQuestionTwo = () => {
  resetQuestionHandler();
  setMediumQuestions();
  quizInfoHandler.currentQuestionNumber += 1;

  questionCardDisplay.innerHTML = `
  <h1>QUESTION 2</h1>
  <h2>for 10pts</h2>
  <h3>${questionHandler.theQuestion}</h3>
  `
  document.getElementById("questions").className = "questionDisplay";
  answerA.innerHTML = `A) ${questionHandler.option1}`;
  answerB.innerHTML = `B) ${questionHandler.option2}`;
  answerC.innerHTML = `C) ${questionHandler.option3}`;
}

const playQuestionThree = () => {
  resetQuestionHandler();
  setDifficultQuestions();
  quizInfoHandler.currentQuestionNumber += 1;
  questionCardDisplay.innerHTML = `
  <h1>FINAL QUESTION OF THE ROUND</h1>
  <h2>for 15pts</h2>
  <h3>${questionHandler.theQuestion}</h3>
  `
  document.getElementById("questions").className = "questionDisplay";
  answerA.innerHTML = `A) ${questionHandler.option1}`;
  answerB.innerHTML = `B) ${questionHandler.option2}`;
  answerC.innerHTML = `C) ${questionHandler.option3}`;
  console.log(questionHandler);
  console.log(quizGameScores);
  console.log(quizInfoHandler);
}

      // Answer Checker Function
const answerChecking = (event) => {
  yourAnswer = event.target.value;
  console.log(yourAnswer);
  if (yourAnswer == questionHandler.theAnswer) {
    answerCorrect();
  } else {
    answerWrong();
  }
}

const answerWrong = () => {
  quizGameScores.thisQuestionPoints += 5;
  questionCardDisplay.innerHTML = `
  <h1>I'm sorry that was wrong!</h1>
  `
  if (quizInfoHandler.currentQuestionNumber == 1){
    setTimeout(playQuestionTwo, waitTime);
  } else if (quizInfoHandler.currentQuestionNumber == 2) {
    setTimeout(playQuestionThree, waitTime);
  } else if (quizInfoHandler.currentQuestionNumber == 3) {
    setTimeout(endOfTheRound, waitTime);
  };
  crowdAww.play();
}

const answerCorrect = () => {
  questionCardDisplay.innerHTML = `
  <h1>Thats right, well done</h1>
  <h2>Have ${quizGameScores.thisQuestionPoints} pts</h2>
  `
  quizGameScores.roundScore += quizGameScores.thisQuestionPoints;
  quizGameScores.thisQuestionPoints += 5;
  crowdWhoop.play();
  if (quizInfoHandler.currentQuestionNumber == 1){
    setTimeout(playQuestionTwo, waitTime);
  } else if (quizInfoHandler.currentQuestionNumber == 2) {
    setTimeout(playQuestionThree, waitTime);
  } else if (quizInfoHandler.currentQuestionNumber == 3) {
    setTimeout(endOfTheRound, waitTime);
  }
}
// Empty questionHandler
const resetQuestionHandler = () => {
  questionHandler.theQuestion = null;
  questionHandler.theAnswer = null;
  questionHandler.option1 = null;
  questionHandler.option2 = null;
  questionHandler.option3 = null;
}

// End of a round
const endOfTheRound = () => {
  quizGameScores.overallGameScore += quizGameScores.roundScore;
  questionCardDisplay.innerHTML = `
  <h1>Thats the end of the round!</h1>
  <h3>In that round you scored ${quizGameScores.roundScore}pts</h3>
  <h3>Giving you an overall score of ${quizGameScores.overallGameScore}pts</h3>
  `
  document.getElementById("questions").className = "questionDisplay-hidden";
  
  quizInfoHandler.currentQuestionNumber = 1;
  
  quizGameScores.thisQuestionPoints = 5;
  quizInfoHandler.currentRound += 1;

  scoreboardDisplay.innerHTML = `Score this round:${quizGameScores.roundScore} Total score:${quizGameScores.overallGameScore}`
  quizGameScores.roundScore = 0;
  
  if (quizInfoHandler.currentRound === 4) {
    setTimeout(endGameProcess, waitTime);
  } else {
    setTimeout(gameBegins, waitTime);
  }
}

const endGameProcess = () => {
  questionCardDisplay.innerHTML = `
  <h1>AND THATS THE END OF THE GAME!</h1>
`
}


// Event Listeners
window.onload = welcomeMessage;
startTheGame.addEventListener("click", gameBegins);
catChoiceSports.addEventListener("click", catPlaySportsQ1);
catChoiceFilm.addEventListener("click", catPlayFilm);
catChoiceScience.addEventListener("click", catPlayScience);
catChoiceJava.addEventListener("click", catPlayJava);
answerA.addEventListener("click", answerChecking);
answerB.addEventListener("click", answerChecking);
answerC.addEventListener("click", answerChecking);




// *** resources for later ***