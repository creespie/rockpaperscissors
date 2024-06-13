
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

//create the starting scores
let computerScore = 0;
let humanScore = 0;
let humanChoice = getHumanImput();
let computerChoice = getComputerChoice();

//functions for human loss, win or draw
function win(){
    humanScore = humanScore + 1;
    console.log("You won!"+ humanChoice + " beats " + computerChoice)
}

function loss(){
    computerScore = computerScore + 1;
    console.log("You lost!"+ computerChoice + " beats " + humanChoice)
}

function draw(){
    console.log("It's a draw!")
}

//function to play the round
function round(){
    if(humanChoice == computerChoice){
        return draw();
    }else if((humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "papaer")){
        return win();
    }else{
    return loss();
    }
}
console.log(draw());
