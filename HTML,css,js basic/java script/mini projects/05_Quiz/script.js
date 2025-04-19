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
nextBtn.addEventListener("click",nextQuestion)
restartBtn.addEventListener("click",restart)
function startQuiz(){
   startBtn.classList.add("hidden")
   nextBtn.classList.add('hidden')
   questionContainer.classList.remove("hidden")
   showQuestion();
}
function showQuestion()
{nextBtn.classList.add("hidden")
questionText.textContent=questions[currentQuestionIndex].questtion;
choicesList.innerHTML=""//clear previos choices
questions[currentQuestionIndex].choices.forEach(choice => {
  const li=document.createElement('li')
  li.textContent=choice;
  li.addEventListener("click",()=>selectedAnswer(choice))
  choicesList.appendChild(li);  
})
}
function selectedAnswer(choice)
{const correctAnswer=questions[currentQuestionIndex].answer;
  if(choice===correctAnswer){
    currentScore++;
  }
  nextBtn.classList.remove("hidden")

}
function nextQuestion(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length)
  {
    showQuestion();
  }
  else{
    showResult()
  }
}
function showResult(){
  questionContainer.classList.add('hidden')
  resultContainer.classList.remove('hidden')

  score.textContent=`${currentScore} out of ${questions.length}`
}
function restart(){
  questionContainer.classList.remove('hidden')
  resultContainer.classList.add('hidden')
  currentQuestionIndex=0;
  currentScore=0;
  showQuestion()
}
})