const rock = document.getElementById('rock');
const paper =  document.getElementById('paper');
const scissor =  document.getElementById('scissor');
const playerOutput = document.getElementById('playerOutput');
const botOutput = document.getElementById('botOutput');
let playerChoice = "";
let botChoice = "";
let randomChoices = Math.floor(Math.random() * 3 + 1);

function choices(value){
    playerChoice = value;
}

if(randomChoices  === 1){
    botChoice = "rock";
}
else if(randomChoices === 2){
    botChoice = "paper";
}
else if(randomChoices === 3){
    botChoice = "scissor";
}

if(playerChoice === botChoice){
    playerOutput.innerHTML = playerChoice;
    botOutput.innerHTML = botChoice;

    window.alert("TIE");
}
else if(playerChoice > botChoice){
    playerOutput.innerHTML = playerChoice;
    botOutput.innerHTML = botChoice;

    window.alert("playerWin");
}