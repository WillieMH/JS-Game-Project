const questionArry = [
  {question: "What is 1+1?", options:["2", "7", "9"], answer: "2"},
  {question: "What is 7x9?", options:["56", "34", "63"], answer: "2"},
  {question: "What is pi?", options:["3.14", "A tasty treat" , "something greek"], answer: "3.14"},
  {question: "What is 4squared?", options:["25", "89" , "16"], answer: "16"},
  {question: "What is my name?", options:["willie", "bob" , "dave"], answer: "willie"}
];

const questionCardDisplay = document.querySelector(".question-card");

// ask question function // can set some of these variable to the global object
const questionAsker = () => {
  const questionChooser = Math.floor(Math.random() * 5);
  const liveQuestionArry = (questionArry[questionChooser]);
  const thisQuestion = liveQuestionArry.question;
  const questionChoice1 = liveQuestionArry.options[0];
  const questionChoice2 = liveQuestionArry.options[1];
  const questionChoice3 = liveQuestionArry.options[2];
  questionCardDisplay.innerHTML = `
  <div>
    <h1>Your question is;</h1>
    <h2>${thisQuestion}</h2>
    <h3>Is it;
    <button class="qChoiceA">A) ${questionChoice1}</button>
    <button class="qChoiceB">B) ${questionChoice2}</button>
    <button class="qChoiceC">C) ${questionChoice3}</button>
  </div>
  `
  }

// console.log(`Your question is;
// ${thisQuestion}
// Is it;
// A) ${questionChoice1}
// B) ${questionChoice2}
// C) ${questionChoice3}`)

// console.log(questionArry[questionChooser]); // Testing the random index number for choosing question