

function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()*(3-1+1)+1);
    if (computerSelection == 1){
        return "Rock"
    }
    else if (computerSelection == 2){
        return "Paper"
    }
    else if(computerSelection==3){
        return "Scissors"
    }
}

function getPlayerChoice(){
    let playerSelection = prompt("welcome to a game of 'Rock-Paper-Scissors! \n Please, select: 1 - Rock , 2 - Paper, 3 - Scissors")
    if(playerSelection == 1){
        return "Rock"
    }
    else if (playerSelection == 2){
        return "Paper"
    }
    else if (playerSelection ==3){
        return "Scissors"
    }
}

function playRound(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        return 1;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")){
        return 2
    }
    else if ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")){
    return 0
    
    }
}
const buttonRock = document.querySelector('btnRock',playRound);
const buttonPaper = document.querySelector('btnPaper',playRound);
const buttonScissors = document.querySelector('btnScissors',playRound);

function game(){
    let computerScore =0;
    let playerScore =0;
for(let i =1; i<=5;i++){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection,computerSelection)
    if(result==2){
        console.log("You won, " + playerSelection + " beats " + computerSelection + " you get one point!")
        playerScore++;
        console.log("Your score: " + playerScore + " Computer score: " + computerScore)
    }
    else if(result==1){
        console.log("It's a draw!")
        console.log("Your score: " + playerScore + " Computer score: " + computerScore)
    }
    else if(result==0){
        console.log("You lost! " + computerSelection + " beats " + playerSelection + " Computer gets one point!")
        computerScore++;
        console.log("Your score: " + playerScore + " Computer score: " + computerScore)
    }
}
if(playerScore>computerScore){
    console.log("Congrats! You have won!")
    console.log("Final score - Computer score: " + computerScore + " Player score: " + playerScore)
}
else if (playerScore == computerScore){
    console.log("It is a draw!")
    console.log("Final score: - Computer score: " + computerScore + " Player score: " + playerScore)
}
else if (playerScore<computerScore){
    console.log("You have lost!")
    console.log("Final score: - Computer score: " + computerScore + " Player score: " + playerScore)
}

}

