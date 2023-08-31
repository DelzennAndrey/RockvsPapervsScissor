const playerOutputmove = document.getElementById('playerOutput');
const computerOutputMove = document.getElementById('botOutput');
const playerOutputScore = document.getElementById('playerScore');
const computerOutputScore = document.getElementById('computerScore');
const winnerResult = document.getElementById('winner');
let computerMove = "";
let result = "";

let score = {
    computerScore:0,
    playerScore:0
}

function move(playerMove){
    computerRandomMove();
   
    if(playerMove == "rock"){
        if(computerMove == "rock"){
            result = "tie";
        } else if(computerMove == "scissor"){
            result = "you win";
            score.playerScore += 1;
        } else if(computerMove == "paper"){
            result = "you lose";
            score.computercore += 1;
        }
    } 
    else if(playerMove == "paper"){
        if(computerMove == "paper"){
            result = "tie";
        } else if(computerMove == "rock"){
            result = "you win";
           score.playerScore += 1;
        } else if(computerMove == "scissor"){
            result = "you lose";
            score.computerScore += 1;
        }
    }
    else if(playerMove == "scissor"){
        if(computerMove == "scissor"){
            result = "tie";
        } else if(computerMove == "paper"){
            result = "you win";
            score.playerScore += 1;
        } else if(computerMove == "rock"){
            result = "you lose";
            score.computerScore += 1;
        }
    }
    playerOutputmove.innerHTML = "player pick" + playerMove;
    computerOutputMove.innerHTML = "computer pick" + computerMove;
    
    computerOutputScore.innerHTML = score.computerScore;
    playerOutputScore.innerHTML = score.playerScore;
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
        if(score.playerScore == 3){
            score.playerScore = 0;
            score.computerScore = 0;
            winnerResult.innerHTML = "Player Win";
        } else if(score.computerScore == 3){
            score.playerScore = 0;
            score.computerScore = 0;
            winnerResult.innerHTML ="Computer Win";
        }   
    }
    console.log(score());
    