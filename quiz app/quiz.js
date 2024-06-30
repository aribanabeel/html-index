const quizData = [
    {
      question: "Where is the correct place to insert a JavaScript?",
      a: "The <head> section",
      b: "The <body> section",
      c: "Both the <head> and the <body> section are correct",
      d: "none of the above",
      correct: "c",
    },
  
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
  ];
  let questionIndex = 0;
const quizDetails = document.querySelector(".quiz-details");
let userAnswer = "";
const quizContainer = document.querySelector(".quiz-sub-container");
const quizScore = document.querySelector(".quiz-score");
const footer = document.querySelector(".quiz-footer");
 let points = 0;



  const loadAppdata = function(){
  
    const questions = document.getElementById("question");
    const optA = document.getElementById("a_text");
    const optB = document.getElementById("b_text");
    const optC = document.getElementById("c_text");
    const optD = document.getElementById("d_text");

  const inputA = document.getElementById("a");
  const inputB = document.getElementById("b");
  const inputC = document.getElementById("c");
  const inputD = document.getElementById("d");

    questions.textContent =  quizData[questionIndex].question;
   optA.textContent = inputA.value = quizData[questionIndex].a;
   optB.textContent = inputB.value = quizData[questionIndex].b;
   optC.textContent = inputC.value =quizData[questionIndex].c;
   optD.textContent =  inputD.value =quizData[questionIndex].d;
  
  quizDetails.textContent = ` ${questionIndex + 1} / ${quizData.length}`;
  };

  const submit = function (){
 
  const submitButton = document.getElementById("btn");
  submitButton.addEventListener("click" , function(){
    goToNextQuestion();
    if( questionIndex <= quizData.length -1){
        const correctAnswer = quizData[questionIndex].correct;
        if (userAnswer === quizData[questionIndex][correctAnswer]) {
          points++;
        }
        questionIndex++;
        loadAppdata();
         quizDetails.textContent = ` ${questionIndex + 1} / ${quizData.length}`;
    } else displayScores();
  });
  };



   const checkOptions = function(){
 const quizCON = document.querySelector(".quiz-options")
 quizCON.addEventListener("change", function(e){
    userAnswer = e.target.value;
 });
 
   };


   const displayScores =  () => {
   const score = document.querySelector(".score")
  
  quizScore.classList.remove("hidden");
   quizContainer.classList.add("hidden");
   footer.classList.add("hidden");
    score.textContent =`You answered ${points}/${quizData.length} question correctly`;
   };

   
   const reset = function (){
    const resetbtn = document.querySelector(".reset");
    resetbtn.addEventListener("click", function () {
        questionIndex = 0;
        points = 0;
    
        quizContainer.classList.remove("hidden");
        quizScore.classList.add("hidden");
        footer.classList.remove("hidden");
    
        loadAppdata();
      });

   };

   function goToNextQuestion() {
    const radios = document.querySelectorAll(".answer");
    [...radios].forEach((radio) => (radio.checked = false));
  }
  









  (function init (){
    loadAppdata();
    submit();
    checkOptions();
    reset();
  })();