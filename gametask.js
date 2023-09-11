<!DOCTYPE html>
<html>
<head>
    <title>Rock Paper Scissors Game</title>
</head>
<body>
    <h1>Rock Paper Scissors</h1>
    <p>Choose your move:</p>
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
    <div id="result"></div>

    <script>
        const userChoices = document.querySelectorAll('button');
        const resultDiv = document.getElementById('result');

        userChoices.forEach(choice => {
            choice.addEventListener('click', playGame);
        });

        function playGame(e) {
            const userChoice = e.target.id;
            const computerChoice = getComputerChoice();
            const winner = getWinner(userChoice, computerChoice);

            displayResult(userChoice, computerChoice, winner);
        }

        function getComputerChoice() {
            const choices = ['rock', 'paper', 'scissors'];
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function getWinner(user, computer) {
            if (user === computer) {
                return "It's a tie!";
            }
            if (
                (user === 'rock' && computer === 'scissors') ||
                (user === 'paper' && computer === 'rock') ||
                (user === 'scissors' && computer === 'paper')
            ) {
                return 'You win!';
            } else {
                return 'Computer wins!';
            }
        }

        function displayResult(user, computer, winner) {
            resultDiv.innerHTML = `
                You chose ${user}, computer chose ${computer}.<br>
                ${winner}
            `;
        }
    </script>
</body>
</html>
