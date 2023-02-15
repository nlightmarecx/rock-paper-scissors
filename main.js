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
let words = ["Rock", "Paper", "Scissors"];
let userGest;
let computerGest;
let computerScore = 0;
let userScore = 0;
let numRounds = 5;

playGame();

function playGame(){
    for(i=0; i<numRounds; i++){
        userGest = prompt("Make a gesture: ");
        userChoice();
        computerChoice();
        result("Result: ");
        console.log("");
        if (i === 4){
            declareWinner();
        }
    }
}

function declareWinner(){
    if (userScore === computerScore){
        console.log("Game has finished: It's a tie!")
    }if (userScore > computerScore){
        console.log("Game has finished: Congratulations! You Won!")
    }if (userScore < computerScore){
        console.log("Game has finished: You Lost! Give up!")
    }  
        
}

function result(x){
    if (userGest === computerGest){
        console.log(x + "Even")
    }else if (userGest === "Rock" && computerGest === "Paper"){
        console.log(x + "You lost");
        computerScore ++;
    }else if (userGest === "Rock" && computerGest === "Scissors"){
        console.log(x + "You won");
        userScore ++;
    }else if (userGest === "Paper" && computerGest === "Rock"){
        console.log(x + "You won");
        userScore ++;
    }else if (userGest === "Paper" && computerGest === "Scissors"){
        console.log(x + "You lost");
        computerScore ++;
    }else if (userGest === "Scissors" && computerGest === "Rock"){
        console.log(x + "You lost");
        computerScore ++;
    }else if (userGest === "Scissors" && computerGest === "Paper"){
        console.log(x + "You won");
        userScore ++;
    }
    scoreTable();
}

function scoreTable(){
    console.log ("Your score: " + userScore);
    console.log ("Opponent score: " + computerScore);
}

function userChoice(){
    userGest = userGest.at(0).toUpperCase() + userGest.substring(1).toLowerCase();
    while (userGest !== "Rock" && userGest !== "Paper" && userGest !== "Scissors"){
        userGest = prompt("Please choose between: a) Rock, b) Paper, c) Scissors")
        userGest = userGest.at(0).toUpperCase() + userGest.substring(1).toLowerCase();
    } 
    console.log("Your gesture: " + userGest)
}

function capitalizer(x){
    x = x.at(0).toUpperCase() + x.substring(1).toLowerCase();
}

function computerChoice(){
    computerGest = Math.floor(Math.random()*words.length);
    if (computerGest === 0){
        computerGest = "Rock"
        console.log("Computer gesture: " + computerGest)
    }else if(computerGest === 1){
        computerGest = "Paper"
        console.log("Computer gesture: " + computerGest)
    }else{
        computerGest = "Scissors"
        console.log("Computer gesture: " + computerGest)
    }
}