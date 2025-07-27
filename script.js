
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    console.log('error');
}

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

