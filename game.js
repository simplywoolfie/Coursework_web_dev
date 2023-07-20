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
