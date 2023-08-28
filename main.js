const playerOutput = document.getElementById('playerOutput');
const botOutput = document.getElementById('botOutput');
let computerMove = "";
let result = "";

function choices(playerMove){
    computerRandomMove();

    if(playerMove == "rock"){
        if(computerMove == "rock"){
            result = "tie";
        } else if(computerMove == "scissor"){
            result = "you win";
        } else if(computerMove == "paper"){
            result = "you lose";
        }
    } 
    else if(playerMove == "paper"){
        if(computerMove == "paper"){
            result = "tie";
        } else if(computerMove == "rock"){
            result = "you win";
        } else if(computerMove == "scissor"){
            result = "you lose";
        }
    }
    else if(playerMove == "scissor"){
        if(computerMove == "scissor"){
            result = "tie";
        } else if(computerMove == "paper"){
            result = "you win";
        } else if(computerMove == "rock"){
            result = "you lose";
        }
}
    alert('you pick ' + playerMove +'. '+ 'computer pick ' + computerMove +'. '+ result);
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
