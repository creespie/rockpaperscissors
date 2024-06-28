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
    //let humanChoice = getHumanImput();
    let computerChoice = getComputerChoice();

    //update human image
    document.getElementById("humanimage").src = "images/" + humanChoice + ".png";

    //update computer image
    document.getElementById("hcomputer").src = "images/" + computerChoice + ".png";

    
    //functions for human loss, win or draw
    function win(){
        humanScore = humanScore + 1;
        outcome.textContent = "You won! "+ humanChoice + " beats " + computerChoice;
        score.textContent = "The score is " + humanScore + " for you and " + computerScore + " for the computer!";
    }
    
    function loss(){
        computerScore = computerScore + 1;
        outcome.textContent = "You lost! "+ computerChoice + " beats " + humanChoice;
        score.textContent = "The score is " + humanScore + " for you and " + computerScore + " for the computer!";
    }
    
    function draw(){
        outcome.textContent ="It's a draw!";
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

    //get the human imput via the prompt command
    function getHumanImput(){
    let choice = prompt("rock, paper or scissors?");
    let fixedchoice = choice.toLowerCase();
    let human;
    let error;
    if(fixedchoice == "rock"){
        human = "rock";
    }else if(fixedchoice == "paper"){
        human = "paper";
    }else if(fixedchoice == "scissors" || fixedchoice == "scissor"){
        human = "scissors";
    }else{
        error = "you inserted an invalid value!";
        return error;
    };
    return human;
    }

    //check who won
    if(humanChoice === computerChoice){
        return draw();
    }else if((humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "papaer")){
        return win();
    }else{
    return loss();
    }
}

//play the game
function playGame(){
    for (let i = 1; i <= 5; i++){
        playRound();
}
}

