window.onload = function () {
    let questions = [
        {
            question: "20 is _ than the age (in years) of world wide web",
            answer: "less"
        },

    ];

    let currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question').textContent = currentQuestion.question;

    document.getElementById('more').addEventListener('click', function () {
        checkAnswer('more');
    });

    document.getElementById('less').addEventListener('click', function () {
        checkAnswer('less');
    });

    function checkAnswer(guess) {
        if (guess === currentQuestion.answer) {
            showMessage('Correct answer!', 'green');
        } else {
            showMessage('Wrong answer! Try again.', 'red');
        }

        // Go next question
        currentQuestion = questions[Math.floor(Math.random() * questions.length)];
        document.getElementById('question').textContent = currentQuestion.question;
    }

    function showMessage(msg, color) {
        let messageElement = document.getElementById('message');
        messageElement.textContent = msg;
        messageElement.style.color = color;
    }
};
