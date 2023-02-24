/* Problem Solving
Understanding: 
    Play the rock paper scissors game in console.log 
without GUI.
Plan: 
    Create Github repository html document
    Create User Input Line
    return of correct input
    Create a function that prints out a random gesture
    Create Function that returns win or lose from user input
    Call the Function
Pseudocode:  
    When User inputs a gesture, thereafter U
    compare the gesture to random gesture, thereafter R
    if the U gesture beats R, return win, if not return lose
    repeat from 1
*/

const playerGestOutput = document.getElementById('playerGestOutput');
const compGestOutput = document.getElementById('compGestOutput');
const roundRsltOutput = document.getElementById('roundRsltOutput');

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

const gameStatus = document.getElementById('gameStatus');
const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('compScore');

let words = ["r", "p", "s"];
let cScore = 0;
let pScore = 0;
let userGest;
let compGest;

playerGestOutput.style.color = "blue";
compGestOutput.style.color = "red";
roundRsltOutput.style.color = "purple";

makeChoice();

// .................................
// MAKE CHOICE FUNCTIONS STARTS HERE

function makeChoice(){
    rockBtn.addEventListener('click', function(){
        game("Rock");
    });
    paperBtn.addEventListener('click',function(){
        game("Paper");
    });
    scissorsBtn.addEventListener('click', function(){
        game("Scissors");
    });
};

function game(x){
    playerGestOutput.innerHTML = x;
    userGest = x;
    computerChoice();
    result();
};

// MAKE CHOICE FUNCTIONS ENDS HERE
// .....................................

// .....................................
// COMPUTER CHOICE FUNCTIONS STARTS HERE

function computerChoice(){
    compGest = Math.floor(Math.random()*words.length);
    if (compGest === 0){
        compGest = "Rock";
        compGestOutput.innerHTML = "Rock";
    }else if(compGest === 1){
        compGest = "Paper";
        compGestOutput.innerHTML = "Paper";
    }else if (compGest === 2){
        compGest = "Scissors";
        compGestOutput.innerHTML = "Scissors";
    };
};

// COMPUTER CHOICE FUNCTIONS ENDS HERE
// .....................................

// .....................................
// ROUND RESULT FUNCTIONS STARTS HERE

function result(){
    switch (userGest+compGest){
        case "RockRock":
        case "ScissorsScissors":
        case "PaperPaper":
            roundRsltOutput.innerHTML = "It's a tie"
            break;
        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            roundRsltOutput.innerHTML = "You won"
            pScore ++;
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            roundRsltOutput.innerHTML = "You lost"
            cScore ++;
            break;
    }
    scoreTable();
    declareWinner();
};

// ROUND RESULT FUNCTIONS ENDS HERE
// .....................................

// .....................................
// RESULT FIELD FUNCTIONS STARTS HERE

function scoreTable(){
    playerScore.innerHTML = "Your score: " + pScore;
    compScore.innerHTML = "Opponent score: " + cScore;
}

function declareWinner(){
    if(pScore === 3 || cScore === 3){
        if (pScore === cScore){
            console.log("Game has finished: It's a tie!")
        }else if (pScore > cScore){
            console.log("Game has finished: Congratulations! You Won!")
        }else if (pScore < cScore){
            console.log("Game has finished: You Lost! Give up!")
        } 
        rockBtn.removeEventListener('click', function(){
            game("Rock");
        });
        paperBtn.removeEventListener('click',function(){
            game("Paper");
        });
        scissorsBtn.removeEventListener('click', function(){
            game("Scissors");
        });
    }         
}

// RESULT FIELD FUNCTIONS ENDS HERE
// .....................................