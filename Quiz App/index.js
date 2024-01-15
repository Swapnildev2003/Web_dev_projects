const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2 // Index of the correct answer
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: 0 // Index of the correct answer
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: 1 // Index of the correct answer
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: 1 // Index of the correct answer
    },
    {
        question: "In which year did World War II end?",
        options: ["1943", "1945", "1950", "1939"],
        correctAnswer: 1 // Index of the correct answer
    }
    // Add more questions as needed
];


const answerElm = document.querySelectorAll(".answer")
const [quesElm, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question,#option_1,#option_2,#option_3,#option_4")
const submitBtn = document.getElementById("submit");
let quiz = document.querySelector(".quiz");
let currentQuiz = 0;
let score = 0;
const loadQuiz = () => {
    const { question, options } = quizQuestions[currentQuiz];
    quesElm.innerHTML = question;
    options.forEach((curOption, index) => {
        window[`option_${index + 1}`].innerHTML = curOption;
    });
}
let getSelectedoption = () => {
    // let ans_index;
    // answerElm.forEach((curOption, index) => {
    //     if (curOption.checked) { ans_index = index; }
    // })
    // return ans_index;
    return Array.from(answerElm).findIndex((curElm, index) => curElm.checked);
}
const deselected = () => {
    answerElm.forEach((el) => el.checked = false);
}
submitBtn.addEventListener("click", () => {
    let selectedIndex = getSelectedoption();
    if (selectedIndex === quizQuestions[currentQuiz].correctAnswer) {
        score += 1;

    }
    currentQuiz++;
    if (currentQuiz < quizQuestions.length) {
        deselected();
        loadQuiz();

    }
    else {
        quiz.innerHTML =
            `<div class="result">
<h2> 🏆 Your score: ${score}/${quizQuestions.length} Correct Answer</h2>
<p>Congratulations on completing the quiz </p>
<button class="reload-button" onclick="location.reload()">Play again 🔷</button>
</div>`;
    }
    console.log(currentQuiz)
})
loadQuiz()