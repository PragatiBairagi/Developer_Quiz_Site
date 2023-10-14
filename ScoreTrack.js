<!DOCTYPE html>
<html>
<head>
    <title>Programming Quiz</title>
</head>
<body>
    <div id="question-container">
        <h2>Question 1:</h2>
        <p>What is the capital of France?</p>
        <ul>
            <li><button onclick="checkAnswer(false)">London</button></li>
            <li><button onclick="checkAnswer(false)">Berlin</button></li>
            <li><button onclick="checkAnswer(true)">Paris</button></li>
        </ul>
    </div>
    <div id="score-container">
        <p>Score: <span id="score">0</span></p>
    </div>

    <script>
        let currentQuestion = 1;
        let score = 0;

        function checkAnswer(isCorrect) {
            if (isCorrect) {
                score++;
            }

            // Display the score
            document.getElementById('score').textContent = score;

            // Simulate moving to the next question
            currentQuestion++;
            const questionContainer = document.getElementById('question-container');
            if (currentQuestion <= 3) {
                questionContainer.innerHTML = `
                    <h2>Question ${currentQuestion}:</h2>
                    <p>Next question...</p>
                    <ul>
                        <li><button onclick="checkAnswer(false)">Choice A</button></li>
                        <li><button onclick="checkAnswer(false)">Choice B</button></li>
                        <li><button onclick="checkAnswer(true)">Choice C</button></li>
                    </ul>
                `;
            } else {
                questionContainer.innerHTML = `
                    <h2>Quiz Complete</h2>
                    <p>Your score: ${score} out of 3</p>
                `;
            }
        }
    </script>
</body>
</html>
