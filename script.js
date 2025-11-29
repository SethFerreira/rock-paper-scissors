const scoreboard = document.querySelector('.scoreboard');
const userFigure = document.querySelector('.user-fig img');
const computerFigure = document.querySelector('.comp-fig img');
const buttons = document.querySelectorAll('.btn');

let userScore = 0;
let computerScore = 0;

// Determine the correct file extension based on the choice
const getFileExtension = (choice) => {
    if (choice === 'rock') return 'png';      
    return 'PNG';                            
}

// Randomly returns 'rock', 'paper', or 'scissors' for the computer's move
const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    const extension = getFileExtension(choice);
    computerFigure.src = `./img/${choice}.${extension}`;
    computerFigure.style.visibility = 'visible';
    return choice;
}

// Compares user and computer choices to decide the winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return 'tie';

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    }
    return 'computer';
}

// Resets the game for a new best-of-3
const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    scoreboard.textContent = `${userScore} : ${computerScore}`;
    userFigure.style.visibility = 'hidden';
    computerFigure.style.visibility = 'hidden';
}

// Handle user clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.image;
        const userExtension = getFileExtension(userChoice);
        userFigure.src = `./img/${userChoice}.${userExtension}`;
        userFigure.style.visibility = "visible";

        const computerChoice = getComputerChoice();
        const winner = determineWinner(userChoice, computerChoice);

        if (winner === 'user') userScore++;
        else if (winner === 'computer') computerScore++;
        scoreboard.textContent = `${userScore} : ${computerScore}`;

        if (userScore === 2 || computerScore === 2) {
            setTimeout(() => {
                if (userScore === 2) alert("You won the game!");
                else alert("Computer won the game!");
                resetGame();
            }, 50);
        }
    });
});
