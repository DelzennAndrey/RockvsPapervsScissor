const playerOutputmove = document.getElementById('playerOutput');
const computerOutputMove = document.getElementById('computerOutput');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const winnerResult = document.getElementById('winner');
let result = "";
let computerMove = "";

let score = {
    computerScore:0,
    playerScore:0
}

function move(playerMove){
    computerRandomMove();
   
    if(playerMove == "rock"){
        if(computerMove == "rock"){
            result = "Tie";
        } else if(computerMove == "scissor"){
            score.playerScore += 1;
            result = "Player Score";
        } else if(computerMove == "paper"){
            score.computerScore += 1;
            result = "Computer Score";
        }
    } 
    else if(playerMove == "paper"){
        if(computerMove == "paper"){
            result = "Tie";
        } else if(computerMove == "rock"){
           score.playerScore += 1;
           result = "Player Score";
        } else if(computerMove == "scissor"){
            score.computerScore += 1;
            result = "Computer Score";
        }
    }
    else if(playerMove == "scissor"){
        if(computerMove == "scissor"){
            result = "Tie";
        } else if(computerMove == "paper"){
            score.playerScore += 1;
            result = "Player Score";
        } else if(computerMove == "rock"){
            score.computerScore += 1;
            result = "Computer Score";
        }
    }
    
    playerOutputmove.innerHTML =`<img src="png/${playerMove}.png" alt="">`;
    computerOutputMove.innerHTML = `<img src="png/${computerMove}.png" alt="">`;
    computerScore.innerHTML = score.computerScore;
    playerScore.innerHTML = score.playerScore;
    winnerResult.innerHTML = result;
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
            winnerResult.innerHTML = "Game Over Player Win";
        } else if(score.computerScore == 3){
            score.playerScore = 0;
            score.computerScore = 0;
            winnerResult.innerHTML ="Game Over Computer Win";
        }   
    }
    