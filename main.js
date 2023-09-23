let result = "";
let computerMove = "";

let score = {
    computerScore:0,
    playerScore:0,
    scoreLimit:1
}

function game(playerMove){
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
    
    document.getElementById('playerOutput').innerHTML =`<img src="png/${playerMove}.png" alt="">`;
    document.getElementById('computerOutput').innerHTML = `<img src="png/${computerMove}.png" alt="">`;
    document.getElementById('playerScore').innerHTML = score.playerScore;
    document.getElementById('computerScore').innerHTML = score.computerScore;

    winner();

    document.getElementById('winner').innerHTML = result;
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
        if(score.playerScore == score.scoreLimit){
            score.playerScore = 0;
            score.computerScore = 0;
            result = "Game Over Player Win";
        } else if(score.computerScore == score.scoreLimit){
            score.playerScore = 0;
            score.computerScore = 0;
            result ="Game Over Computer Win";
        }   
    }

    function scoreLimit (){
        while(true){
            let limit = window.prompt('Enter Limit Score. Note! You must enter a number.');
            if(!/[0-9]/.test(limit)){
                window.alert("Input invalid!. Number only. Try again!");
            } else if(limit < score.scoreLimit){
                window.alert("Input invalid!. Your entry score is less than the previous score. Try again");
            } else{
                score.scoreLimit = limit;
                return false;
            }
        }
    }

    function reset(){
        score.playerScore = 0;
        score.computerScore = 0;
        document.getElementById('playerScore').innerHTML = score.playerScore;
        document.getElementById('computerScore').innerHTML = score.computerScore;
        document.getElementById('winner').innerHTML = "Winner?";
    }