// //initialising inputs
let computerSelection = undefined;
let playerSelection = undefined;
let playerWins = 0; //count number of player wins
let playerLoses = 0;//count number of player loses
let playerDraws = 0;//count number of player draws

const score = document.getElementById("score");

//button handling playerSelection
const playerBtns = document.querySelectorAll(".btn"); //create button object for all buttons of class btn
playerBtns.forEach(function(btn) { //add eventListener for each playerBtn
    btn.addEventListener("click", function(){
        playerSelection = btn.getAttribute("id"); //pick up ID for playerSelection
        game(); //play game

        score.innerHTML = `Wins:${playerWins} Lose:${playerLoses} Draw:${playerDraws}`;
        if (playerWins === 5) score.innerHTML = "Player Wins!";
        if (playerLoses === 5) score.innerHTML = "Player Loses!";


    })
})

//function to play round 5 times and record results
function game(numGames = 1) {
    // for loop to iterate playRound() 5 times

    for (let i = 0; i < numGames; i++) {
        //generate computer selection and prompt player selection
        computerSelection = getComputerChoice();
        
        //play round
        //log output and record result
        // console.log(playerSelection, computerSelection, playRound(playerSelection, computerSelection))
        let outcome = playRound(playerSelection, computerSelection);
        
        if  (outcome === "player win") {
            playerWins = playerWins + 1;
        } else if (outcome === "player lose") {
            playerLoses = playerLoses + 1;
        } else if (outcome = "draw") {
            playerDraws = playerDraws + 1;
        } 
    }
    //display results

    console.log(playerWins, playerLoses, playerDraws);
}

// //function to select computer choice from random integer 0 1 2
function getComputerChoice() {
    //use function to generate random 0 1 or 2
    let randomInt = getRandomInt(0, 3);

    //use random number to pick 1 of 3 options - rock/paper/scissors
    if (randomInt === 0) {
        return "rock";
    } else if (randomInt === 1) {
        return "paper";
    } else if (randomInt === 2) {
        return "scissors";
    }
}

//generate random between min and max values for computer selection
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
       
//function to play a round between player and computer
function playRound(playerSelection, computerSelection) {
    //compare player and computer selection and notify winner outcome

    //rock beats scissors
    //paper beats rock
    //scissors beats paper

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "draw";
        } else if (computerSelection === "paper") {
            return "player lose";
        } else if (computerSelection === "scissors") {
            return "player win";
        }   
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "player win";
        } else if (computerSelection === "paper") {
            return "draw";
        } else if (computerSelection === "scissors") {
            return "player lose";
        }   
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "player lose";
        } else if (computerSelection === "paper") {
            return "player win";
        } else if (computerSelection === "scissors") {
            return "draw";
        }   
    }

}