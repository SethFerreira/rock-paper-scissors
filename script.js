// Returns valid user choice or logs error if invalid
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    }
    console.log('error');
}

// Randomly returns 'rock', 'paper', or 'scissors' for the computer's move
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        randomNumber = 'rock';
    } else if (randomNumber === 1) {
        randomNumber = 'paper';
    } else {
        randomNumber = 'scissors'
    }
    return randomNumber;
}

// Compares user and computer choices to decide the winner; includes a 'bomb' cheat code
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'user won!'
    }
    if (userChoice === computerChoice) {
        return 'tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'computer won';
        }
        return 'user won';
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'computer won';
        }
        return 'user won';
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'computer won';
        }
        return 'user won';
    }
}

// Starts the game; userChoice must be 'rock', 'paper', 'scissors', or 'bomb'
const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();