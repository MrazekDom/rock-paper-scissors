const rock = document.getElementById("btnRock");
const paper = document.getElementById("btnPaper");
const scissors = document.getElementById("btnScissors");

const message = document.getElementById("message");
const count = document.getElementById("count");

let playerSelection;


let computerScore =0;
let playerScore =0;
let numberOfRounds=0;

rock.addEventListener('click',function(){
    playerSelection ="Rock"
    playRound(playerSelection);
});
paper.addEventListener('click',function(){
    playerSelection="Paper"
    playRound(playerSelection);
});
scissors.addEventListener('click',function(){
    playerSelection="Scissors"
    playRound(playerSelection);
})

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

function playRound(playerSelection){
    computerSelection = getComputerChoice();
    let text;
    let points;
    if(numberOfRounds<5){
        if(playerSelection == computerSelection){
            text ="It's a draw!";
            points="Your score: " + playerScore + " Computer score: " + computerScore;
        }
        else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")){
            text="You won, " + playerSelection + " beats " + computerSelection + " you get one point!";
            playerScore++;
            points="Your score: " + playerScore + " Computer score: " + computerScore;
        }
        else if ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")){
            text="You lost! " + computerSelection + " beats " + playerSelection + " Computer gets one point!";
            computerScore++;
            points="Your score: " + playerScore + " Computer score: " + computerScore;
        
        }
        message.textContent=text;
        count.textContent=points;
        numberOfRounds++;
    }
    
    else{
        if(playerScore>computerScore){
            text="Congrats! You have won!";
            points="Final score - Computer score: " + computerScore + " Player score: " + playerScore;
        }
        else if (playerScore == computerScore){
            text="It is a draw!";
            points="Final score: - Computer score: " + computerScore + " Player score: " + playerScore;
        }
        else if (playerScore<computerScore){
            text="You have lost!";
            points="Final score: - Computer score: " + computerScore + " Player score: " + playerScore;
        }
        message.textContent=text;
        count.textContent=points;
    }
    
}
