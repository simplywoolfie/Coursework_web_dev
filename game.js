// Run code when page has finished loading 
window.onload = function () {
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

    ];

    // Pick a random question from the "questions" array
    let currentQuestion = questions[Math.floor(Math.random() * questions.length)];

    // Display the current question text in the HTML paragraph with id "question"
    document.getElementById('question').textContent = currentQuestion.question;

    // Event listener to the "More" button
    document.getElementById('more').addEventListener('click', function () {
        // "More" button is clicked, call the checkAnswer function with argument "more"
        checkAnswer('more');
    });

    // Event listener to the "Less" button
    document.getElementById('less').addEventListener('click', function () {
        // When the "Less" button is clicked, call the checkAnswer function with argument "less"
        checkAnswer('less');
    });

    // Function to check if the player's guess is correct
    function checkAnswer(guess) {

        if (guess === currentQuestion.answer) {
            // Correct answer, colour green to indicate it
            showMessage('Correct answer!', 'green');
        } else {
            // Wrong answer, colour red to indicate it
            showMessage('Wrong answer! Try again.', 'red');
        }

        // Get new random question from the 'questions' array
        currentQuestion = questions[Math.floor(Math.random() * questions.length)];

        // Display the new question text in the HTML paragraph with id 'question'
        document.getElementById('question').textContent = currentQuestion.question;
    }

    // Defines a function to display a message to a player
    function showMessage(msg, color) {
        // Gets the HTML paragraph with id 'message'
        let messageElement = document.getElementById('message');

        // Message argument
        messageElement.textContent = msg;

        // Sets the colour
        messageElement.style.color = color;
    }
};
