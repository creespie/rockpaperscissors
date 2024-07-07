//get all the variables for divs and buttons
const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score");
const outcome = document.querySelector("#outcome");

//execute playround on button click
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id);
    });
  });

//create the starting scores
let computerScore = 0;
let humanScore = 0;

//function to play the round
function playRound(humanChoice){
    
    let computerChoice = getComputerChoice();

    //update human image
    document.getElementById("humanimage").src = "images/" + humanChoice + ".png";

    //update computer image
    document.getElementById("hcomputer").src = "images/" + computerChoice + ".png";

    
    //functions for human loss, win or draw
    function win(){
        humanScore = humanScore + 1;
        outcome.textContent = "You won! "+ humanChoice + " beats " + computerChoice;
        //stop game on 5
        if(humanScore == 5){
            score.textContent = "You won the match! You got to 5 first!";
            computerScore = 0;
            humanScore = 0;
        }else{
            score.textContent = "The score is " + humanScore + " for you and " + computerScore + " for the computer!";
        }
    }
    
    function loss(){
        computerScore = computerScore + 1;
        outcome.textContent = "You lost! "+ computerChoice + " beats " + humanChoice;
        //stop game on 5
        if(computerScore == 5){
            score.textContent = "You lost the match! The computer got to 5 first!";
            computerScore = 0;
            humanScore = 0;
        }else{
            score.textContent = "The score is " + humanScore + " for you and " + computerScore + " for the computer!";
        }
    }
    
    function draw(){
        outcome.textContent ="It's a draw!";
        score.textContent = "The score is " + humanScore + " for you and " + computerScore + " for the computer!";
    }


    //get the computer choice with random generation of numbers
    function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    let choice;
    if(x === 0){
       choice = "rock";
    }else if(x === 1){
        choice = "paper";
    }else{
       choice = "scissors";
    };
    return choice;
    }

    
    //check who won
    if(humanChoice === computerChoice){
        return draw();
    }else if((humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper")){
        return win();
    }else{
    return loss();
    }
}


