const sportsEasyArry = [
{question: "What sport is described as “the beautiful game”?", answer: "Football", options: ["Football", "Golf", "Fishing"]},
{question: "How long is the total distance of a marathon?", answer: "26.2miles", options: ["40.2miles", "25.5miles", "26.2miles"]},
{question: "What was Mohammed Ali's original name?", answer: "Cassius Clay", options: ["Mohammed Clay", "Cassius Clay", "Cassius Ali"]},
{question: "What is the maximum break you can score in snooker?", answer: "147", options: ["145", "147", "150"]},
{question: "In football, which team has won the Champions League (formerly the European Cup) the most?", answer: "Real Madrid", options: ["Barcelona", "Real Madrid", "Liverpool"]},
{question: "Which Formula 1 driver has won the most races in the history of the sport?", answer: "Lewis Hamilton", options: ["Michael Schumacer", "Lewis Hamilton", "Ayrton Senna"]},
{question: "Which sport uses a net, a racket, and a shuttlecock?", answer: "Badminton", options: ["Tennis", "Squash", "Badminton"]},
{question: "What two teams play in “El Clasico”?", answer: "Barcelona & Real Madrid", options: ["Ath. Madrid & Real Madrid", "AC Milan & Inter Milan", "Barcelona & Real Madrid"]},
{question: "What is the name Tyson Fury calls himself?", answer: "Gypsy King", options: ["The Whirlwind", "The Tornado", "Gypsy King"]},
{question: "Which country did F1 legend Ayrton Senna come from?", answer: "Brazil", options: ["Spain", "Italy", "Brazil"]},
];

const sportsMediumArry =[
  {question: "Which country won the first ever football world cup?", answer: "Uruguay", options: ["Brazil", "Uruguay", "France"]},
  {question: "How many gold medals has Usain Bolt won?", answer: "8", options: ["8", "7", "6"]},
  {question: "What five colours make up the Olympic rings?", answer: "Blue, black, green, red & yellow", options: ["Red, yellow, green, white & blue", "Blue, red, green, yellow & purple", "Blue, black, green, red & yellow"]},
  {question: "Who has won more tennis grand slam titles, Venus Williams or Serena Williams?", answer: "Serena", options: ["Venus", "Serena", "Tied"]},
  {question: "Which country won the first ever rugby world cup?", answer: "New Zealand", options: ["New Zealand", "Australia", "South Africa"]},
  {question: "In which sport would competitors use a piece of equipment known as a foil?", answer: "Fencing", options: ["Triathalon", "Fencing", "Fishing"]},
  {question: "In which sport do teams compete to win the Stanley Cup?", answer: "Ice Hockey", options: ["American Football", "Basketball", "Ice Hockey"]},
  {question: "What international rugby team are known as the Pumas?", answer: "Argentina", options: ["Uruguay", "Argentina", "Paraguay"]},
  {question: "At which Olympics did Kelly Holmes win two gold medals?", answer: "Athens 2004", options: ["Athens 2004", "Sydney 2000", "Beijing 2008"]},
  {question: "Won who the last cricket world cup?", answer: "England", options: ["India", "West Indies", "England"]}
]

const sportsHardArry = [
  {question: "How many regulation strokes are there in swimming?", answer: "Four", options: ["Four", "Two", "Six"]},
  {question: "What is his world record time for the 100 metres?", answer: "9.58secs", options: ["9.58secs", "9.48secs", "9.53sec"]},
  {question: "What is the only sport to be played on the moon?", answer: "Golf", options: ["Golf", "American Football", "Tennis"]},
  {question: "How many NBA championships did Michael Jordan win with the Chicago Bulls?", answer: "6", options: ["4", "5", "6"]},
  {question: "The Chicago Cubs and Boston Red Sox play which sport?", answer: "Baseball", options: ["Baseball", "Basketball", "American Football"]},
  {question: "Who is the Premier League's all-time top scorer?", answer: "Alan Shearer", options: ["Alan Shearer", "Michael Owen", "Iain Wright"]},
  {question: "Which course is The Masters golf tournament held?", answer: "Augusta National Golf Club", options: ["Augusta National Golf Club", "Pine Valley", "Pebble Beach"]},
  {question: "Which sport involves tucks and pikes?", answer: "Diving", options: ["Fishing", "Diving", "Horse Dresage"]},
  {question: "What is Canada's national sport?", answer: "Lacrosse", options: ["Ice Hockey", "Lacrosse", "Baseball"]},
  {question: "How many players are there in a rugby league team?", answer: "13", options: ["15", "14", "13"]}
]

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

// *** CODE BELOW IS FOR LOADING QUESTIONS TO QUESTIONHANDLER OBJECT
// *** @ 1506 06.10.2022 IT IS COMPLETED, WORKS AND JUST NEEDS PUTTING INTO FUNCTIONS.

const randomQuestionChooser = Math.floor(Math.random() *10);
const questionEasy = (sportsEasyArry[randomQuestionChooser]);
questionHandler.easyQuestion = questionEasy.question;
questionHandler.easyQAnswer = questionEasy.answer;
questionHandler.easyQOption1 = questionEasy.options[0];
questionHandler.easyQOption2 = questionEasy.options[1];
questionHandler.easyQOption3 = questionEasy.options[2];


const randomQuestionChooserMed = Math.floor(Math.random() *10);
const questionMed = (sportsMediumArry[randomQuestionChooser]);
questionHandler.medQuestion = questionMed.question;
questionHandler.medQAnswer = questionMed.answer;
questionHandler.medQOption1 = questionMed.options[0];
questionHandler.medQOption2 = questionMed.options[1];
questionHandler.medQOption3 = questionMed.options[2];

const randomQuestionChooserDif = Math.floor(Math.random() *10); //this bit works
const questionHard = (sportsHardArry[randomQuestionChooser]); //this bit works
questionHandler.hardQuestion = questionHard.question; //this bit works
questionHandler.hardQAnswer = questionHard.answer;
questionHandler.hardQOption1 = questionHard.options[0];
questionHandler.hardQOption2 = questionHard.options[1];
questionHandler.hardQOption3 = questionHard.options[2];


console.log(questionHandler);

