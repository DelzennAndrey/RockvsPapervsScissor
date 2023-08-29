const playerOutputmove = document.getElementById('playerOutput');
const computerOutputMove = document.getElementById('botOutput');
const playerOutputScore = document.getElementById('playerScore');
const computerOutputScore = document.getElementById('computerScore')
let computerMove = "";
let result = "";
let computerScore = 0;
let playerScore = 0;

function move(playerMove){
    computerRandomMove();
    if(playerMove == "rock"){
        if(computerMove == "rock"){
            result = "tie";
        } else if(computerMove == "scissor"){
            result = "you win";
            playerScore += 1;
        } else if(computerMove == "paper"){
            result = "you lose";
            computerScore += 1;
        }
    } 
    else if(playerMove == "paper"){
        if(computerMove == "paper"){
            result = "tie";
        } else if(computerMove == "rock"){
            result = "you win";
            playerScore += 1;
        } else if(computerMove == "scissor"){
            result = "you lose";
            computerScore += 1;
        }
    }
    else if(playerMove == "scissor"){
        if(computerMove == "scissor"){
            result = "tie";
        } else if(computerMove == "paper"){
            result = "you win";
            playerScore += 1;
        } else if(computerMove == "rock"){
            result = "you lose";
            computerScore += 1;
        }
    }
    
    playerOutputmove.innerHTML = "player pick" + playerMove;
    computerOutputMove.innerHTML = "computer pick" + computerMove;
    
    computerOutputScore.innerHTML = computerScore;
    playerOutputScore.innerHTML = playerScore;
    
    winner();
}
function computerRandomMove(){
    let randomMove = Math.floor(Math.random() * 3 + 1);
    if(randomMove  == 1){
        computerMove = "rock";
    }
    else if(randomMove == 2){
        computerMove = "paper";
    }
    else if(randomMove == 3){
        computerMove = "scissor";
    }
}


function winner(){
    if(playerScore == 3){
        alert("playerWin");
        playerScore = 0;
        computerScore = 0;
    } else if(computerScore == 3){
        alert("computerWin");
        playerScore = 0;
        computerScore = 0;
    }    
}

    