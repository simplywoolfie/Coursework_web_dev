// Run code when page has finished loading 
window.onload = function () {
    let score = 0;
    // Array of question objects
    let questions = [
        {
            question: "20 is _ than the age (in years) of world wide web",
            answer: "less"
        },
        {
            question: "A human has _ noses than a slug",
            answer: "less"
        },
        {
            question: "The distance between US and Russia at the closest point is _ than Germany to Lithuania distance",
            answer: "less"
        },
        {
            question: "Of the total water on Earth, percentage of drinkable freshwater is _ compared to on Mars",
            answer: "more"
        },
        {
            question: "Population of the UK is _ than Lithuania",
            answer: "more"
        },
        {
            question: "Number of hours worked by the average person in a lifetime is _ hours of TV an average American watch in a lifetime",
            answer: "less"
        },
        {
            question: "Calories in a large Avocado is _ than a large apple",
            answer: "more"
        },
        {
            question: "A cow has _ stomachs than hearts in an octopus",
            answer: "more"
        },
        {
            question: "Jupiter has _ moons compared to Earth",
            answer: "more"
        },
    ];

    // Saves the total number of questions
    const totalQuestions = questions.length;

    // Defines a function to show a message to the player
    function showMessage(message, color) {
        const messageElement = document.getElementById('message');
        messageElement.style.color = color;
        messageElement.textContent = message;
    }

    // Function to check if the player's answer is correct
    function checkAnswer(guess) {
        if (guess === currentQuestion.answer) {
            // If answer correct message shows, green indicates it
            showMessage('Correct answer!', 'green');
            score++; // Add score by 1 if the answer is correct
        } else {
            // If answer wrong message shows, red indicates it
            showMessage('Wrong answer! The correct answer was ' + currentQuestion.answer + '.', 'red');
        }

        // Removes the answered question from the questions array
        questions.splice(questions.indexOf(currentQuestion), 1);

        // Calculates the percentage of correct answers
        const percentage = Math.floor((score / totalQuestions) * 100);

        // Displays the score and the percentage of correct answers
        document.getElementById('score').textContent = 'Score: ' + score + ' (' + percentage + '% correct)';

        // Checks if there are any questions left
        if (questions.length > 0) {
            currentQuestion = questions[Math.floor(Math.random() * questions.length)];
            document.getElementById('question').textContent = currentQuestion.question;
        } else {
            // If not then displays a game over message and the final score
            document.getElementById('question').textContent = 'Game Over! Your final score is ' + score + ' (' + percentage + '% correct).';
        }
    }

    // Defines function to handle when the player clicks the "less" button
    document.getElementById('less').onclick = function () {
        if (questions.length > 0) {
            checkAnswer('less');
        }
    };

    // Defines a function to handle when the player clicks the "more" button
    document.getElementById('more').onclick = function () {
        if (questions.length > 0) {
            checkAnswer('more');
        }
    };

    // Random question from the "questions" array
    let currentQuestion = questions[Math.floor(Math.random() * questions.length)];

    // Displays the question text in the HTML paragraph with id "question"
    document.getElementById('question').textContent = currentQuestion.question;
};