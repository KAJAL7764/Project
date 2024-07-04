const questions = [
    {
        question: "What is the capital of France?",
       answer: [
   {options: "Paris", correct: true},
   {options: "Delhi", correct: false},
   {options: "Berlin", correct: false},
   {options: "Lisbon", correct: false},
       ]
    },
    {
       question: "What is the largest planet in our solar system?",
       answer: [
   {options: "Earth", correct: false},
   {options: "Mars", correct: false},
   {options: "Jupiter", correct: true},
   {options: "Saturn", correct: false},
       ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answer: [
    {options: "Ag", correct: false},
    {options: "Au", correct: true},
    {options: "Pb", correct: false},
    {options: "Fe", correct: false},
        ]
     },
     {
      question: "What is the capital of Japan?",
        answer: [
    {options: "Beijing", correct: false},
    {options: "Tokyo", correct: true},
    {options: "Bankok", correct: false},
    {options: "Paris", correct: false},
        ]
     },
     {
        question: "What is the largest mammal?",
          answer: [
      {options: "Elephant", correct: false},
      {options: "Blue Whale", correct: true},
      {options: "Giraffe", correct: false},
      {options: "Nont of these", correct: false},
          ]
       },
       {
        question: "Which element has the chemical symbol 'O'?",
        answer: [
            {options: "Oxygen", correct: true},
            {options: "Gold", correct: false},
            {options: "Silver", correct: false},
            {options: "Hydrogen", correct: false},
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answer: [
            {options: "Gold", correct: false},
            {options: "Iron", correct: false},
            {options: "Diamond", correct: true},
            {options: "Silver", correct: false},
        ]
    },
    {
        question: "What is the capital of Italy?",
        answer: [
            {options: "Rome", correct: true},
            {options: "Milan", correct: false},
            {options: "Venice", correct: false},
            {options: "Florence", correct: false},
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answer: [
            {options: "K2", correct: false},
            {options: "Kangchenjunga", correct: false},
            {options: "Mount Everest", correct: true},
            {options: "Lhotse", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for silver?",
        answer: [
            {options: "Ag", correct: true},
            {options: "Au", correct: false},
            {options: "Pb", correct: false},
            {options: "Fe", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            {options: "Mars", correct: true},
            {options: "Jupiter", correct: false},
            {options: "Saturn", correct: false},
            {options: "Venus", correct: false},
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answer: [
            {options: "Harper Lee", correct: true},
            {options: "Mark Twain", correct: false},
            {options: "Ernest Hemingway", correct: false},
            {options: "F. Scott Fitzgerald", correct: false},
        ]
    },
    {
        question: "What is the capital of Canada?",
        answer: [
            {options: "Toronto", correct: false},
            {options: "Ottawa", correct: true},
            {options: "Vancouver", correct: false},
            {options: "Montreal", correct: false},
        ]
    },
    {
        question: "Which ocean is the largest?",
        answer: [
            {options: "Atlantic Ocean", correct: false},
            {options: "Indian Ocean", correct: false},
            {options: "Arctic Ocean", correct: false},
            {options: "Pacific Ocean", correct: true},
        ]
    },

{
    question: "What is the smallest planet in our solar system?",
    answer: [
            {options: "Mercury", correct: true},
            {options: "Earth", correct: false},
            {options: "Mars", correct: false},
            {options: "Jupiter", correct: false},
        ]
},
{
    question: "Full from of HTML",
    answer: [
        {options: "HyperText Markup Language", correct: true},
        {options: "HyperText Transfer Protocol", correct: false},
        {options: "Hypertext Preprocessor", correct: false},
        {options: "Hypertext Markup Language", correct: false},
    
    ]
}

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.options;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)    
});
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
         selectedBtn.classList.add("correct");
         score++;
        }
        else{
            selectedBtn.classList.add("wrong");
        }
        Array.from(answerButtons.children).forEach(button => {
           if(button.dataset.correct === "true"){
            button.classList.add("correct");
           }
            button.disabled = true;
        });
  
      nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
 if(currentQuestionIndex < questions.length){
    showQuestion();
 }
 else{
    showScore();
 }
 
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();








