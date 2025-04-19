document.addEventListener("DOMContentLoaded",()=>{
  const questions=[
    {
          questtion:"what is the capital of france?",
          choices:["Paris","London","berlin","Madrid"],
          answer:"Paris",
    },
    {
      questtion:"what planet is known as ret planet?",
      choices:["Venus","Mars","Jupiter","Saturn"],
      answer:"Mars",
},
]
let currentQuestionIndex=0;
let currentScore=0;
const quizContainer=document.getElementById("quiz-container");
const questionContainer=document.getElementById("question-container")
const questionText=document.getElementById("question-text")
const choicesList=document.getElementById("choices-list")
const nextBtn=document.getElementById("next-btn")
const resultContainer=document.getElementById("result-container")
const score=document.getElementById("score")
const restartBtn=document.getElementById("restart-btn")
const startBtn=document.getElementById("start-btn")

startBtn.addEventListener("click",startQuiz)

function startQuiz(){
   startBtn.classList.add("hidden")
   questionContainer.classList.remove("hidden")
   showQuestion();
}
function showQuestion()
{nextBtn.classList.add("hidden")
questionText.textContent=questions[currentQuestionIndex].questtion;

}


})