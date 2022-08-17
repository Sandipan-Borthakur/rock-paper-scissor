function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    index = Math.floor(Math.random() * 3);
    return choices[index]
}

function playRound() {
    playerSelection = this.id;
    computerSelection = getComputerChoice();

    const resultContent = document.createElement('div');
    let returnVal = 0
    if (playerSelection == "rock" && computerSelection == "paper") {
        resultContent.textContent = "You Lose";
        returnVal = -1;
    }
    else if (playerSelection == "rock" && computerSelection == "scissor") {
        resultContent.textContent = "You Win";
        returnVal = 1
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        resultContent.textContent = "You Win";
        returnVal = 1
    }
    else if (playerSelection == "paper" && computerSelection == "scissor") {
        resultContent.textContent = "You Lose";
        returnVal = -1
    }
    else if (playerSelection == "scissor" && computerSelection == "rock") {
        resultContent.textContent = "You Lose";
        returnVal = -1
    }
    else if (playerSelection == "scissor" && computerSelection == "paper") {
        resultContent.textContent = "You Win";
        returnVal = 1
    }
    else if (playerSelection == computerSelection) {
        resultContent.textContent = "It is a tie.";
        returnVal = 0
    }
    result.appendChild(resultContent);
    winnerCount += returnVal;
}

function myfunc() {
    
    if (count === 5) {
        buttons.forEach((button) => {
            button.removeEventListener('click', myfunc);
            button.removeEventListener('click', playRound);
        });

        if (winnerCount > 0) {
            winnerContent.textContent = `You Won the Game by ${winnerCount}`;
        }
        else if(winnerCount < 0) {
            winnerContent.textContent = `You lost the Game by ${Math.abs(winnerCount)}`;
        }
        else {
            winnerContent.textContent = `This game is a tie`;
        }
        result.appendChild(winnerContent);
    }
    count += 1;
}


const result = document.querySelector('#result');
const buttons = document.querySelectorAll('button');
var count = 1;
var winnerCount = 0;
const winnerContent = document.createElement('div');


buttons.forEach((button) => {
    button.addEventListener('click', playRound);
    button.addEventListener('click', myfunc);
});