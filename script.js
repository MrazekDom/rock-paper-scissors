function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()*(3-1+1)+1);
    if (choice == 1){
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
    console.log("welcome to a game of 'Rock-Paper-Scissors!")
    let playerSelection = prompt("Please, select: 1 - Rock , 2 - Paper, 3 - Scissors")
    if(playerInput == 1){
        return "Rock"
    }
    else if (playerSelection == 2){
        return "Paper"
    }
    else if (playerInput ==3){
        return "Scissors"
    }
}

function playRound(playerSelection,computerSelection){
    if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return 2
    }
    else if (playerSelection == "Rock" && computerSelection == "Rock"){
        return 1
    }
    else if(playerSelection=="Rock"&& computerSelection=="Paper"){
        return 0
    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return 2
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        return 1
    }
    else if(playerSelection=="Scissors"&& computerSelection=="Rock"){
        return 0
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return 2
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper"){
        return 1
    }
    else if(playerSelection=="Paper"&& computerSelection=="Scissors"){
        return 0
    }



}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))

