const questions = [
                    {
                        question: "Grand Central Terminal, Park Avenue, New York is the world's",
                        answer: [
                                {option:"largest railway station", correct:"true"},
                                {option:"largest subway", correct:"false"},
                                {option:"longest railway station", correct:"false"},
                                {option:"highest railway station", correct:"false"}
                        ]
                    },
                    {
                        question: "Entomology is the science that studies",
                        answer: [
                                {option:"Behavior of human beings", correct:"False"},
                                {option:"Insects", correct:"true"},
                                {option:"Formation of rocks", correct:"false"},
                                {option:"None of the above", correct:"false"}
                        ]
                    },
                    {
                        question: "Galileo was an Italian astronomer who",
                        answer: [
                                {option:"developed the telescope", correct:"false"},
                                {option:"discovered four satellites of Jupiter", correct:"false"},
                                {option:"discovered that the movement of pendulum produces a regular time measurement", correct:"false"},
                                {option:"All of the above", correct:"true"}
                        ]
                    },
                    {
                        question: "Exposure to sunlight helps a person improve his health because",
                        answer: [
                                {option:"The infrared light kills bacteria in the body", correct:"false"},
                                {option:"resistance power increases", correct:"false"},
                                {option:"the pigment cells in the skin get stimulated and produce a healthy tan", correct:"false"},
                                {option:"the ultraviolet rays convert skin oil into Vitamin D", correct:"true"}
                        ]
                    },
                    {
                        question: "Famous sculptures depicting art of love built some time in 950 AD - 1050 AD are",
                        answer: [
                                {option:"Khajuraho temples", correct:"true"},
                                {option:"Jama Masjid", correct:"false"},
                                {option:"Sun Temple", correct:"false"},
                                {option:"Mahabalipuram Temple", correct:"false"}
                        ]
                    }
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    score = 0;
    currentQuestionIndex = 0;
    nextBtn.innerHTML="Next";
    nextBtn.style.display="None";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let currentQuestionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML= `${currentQuestionNumber}. ${currentQuestion.question}`;
    // adding answer...to options
    currentQuestion.answer.forEach((answer)=>{
        const button = document.createElement("button");
        button.innerHTML = answer.option;
        button.classList.add("btn");
        answerBtn.appendChild(button);

        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", displayCorrectAnswer);
    })
}

function displayCorrectAnswer(e){
    const targetElement = e.target;
    let isCorrect = targetElement.dataset.correct === "true" ;

    if(isCorrect){
        targetElement.classList.add("correct");
        score++;
    }else{
        targetElement.classList.add("incorrect");
        score--;
    }

    Array.from(answerBtn.children).forEach(btn =>{
        if(btn.dataset.correct==="true"){
            btn.classList.add("correct");
        }
        btn.disabled=true;
        
    });
    nextBtn.style.display = "Block";

}

nextBtn.addEventListener("click", (e)=>{
    currentQuestionIndex++;
    // const btnClass = document.querySelectorAll("#answer-btn .btn");
    Array.from(answerBtn.children).forEach(btn =>{
        btn.remove();
    });
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        nextBtn.innerHTML="Play again";
        questionElement.innerHTML = `your score is ${score} out of ${questions.length}`;
        // startQuiz();
        nextBtn.addEventListener("click",()=>{
            startQuiz();
        });

    }
    
});


startQuiz();