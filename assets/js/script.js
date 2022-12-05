/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/

//Define questions

var questions = [
    {
        question: "Which symbol is used to define a variable?",
        choices: ["A. :", "B. =", "C. ,", "D. /"],
        answer: "B. ="
    },
    {
        question: "The scope available and visible in all other scopes is called?",
        choices: ["A. Local Scope", "B. Quck Scope", "C. All Scope", "D. Global Scope"],
        answer: "D. Global Scope"
    },
    {
        question: "True or False values are referred to as:",
        choices: ["A. Booleans", "B. Variables", "C. Functions", "D. Strings"],
        answer: "A. Booleans"
    },
    {
        question: "Strict equality is identified with:",
        choices: ["A. +=", "B. ==", "C. =:", "D. ==="],
        answer: "D. ==="
    },
    {
        question: "Which of the following is NOT a commonly used data type?",
        choices: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
        answer: "C. Alerts"
    },

];