// Computer choose randomly and assign into variable
function computerPlay () {
    randomGenerator = Math.floor(Math.random() * 3);

    if (randomGenerator === 0) { 
        computerWeapon = "rock" ;       
    } else if (randomGenerator === 1) {
        computerWeapon ="paper";
    } else { 
        computerWeapon = "scissors";
    };

    return computerWeapon;
}



// Player Choose and assign into variable
function playerWeapon () {
    return prompt("This is rock paper scisors game, choose your weapon !!")};

// compare computer selection and player selection

let playerScore = 0;
let computerScore = 0;
function playRound () {


    let computerSelection = computerPlay();


    let playerSelection = playerWeapon().toLowerCase();
    

    if ( playerSelection === "rock" && computerSelection === "scissors" ) {
        playerScore++;
    } else if ( playerSelection === "rock" && computerSelection === "paper" ) {
        computerScore++;
    } else if ( playerSelection === "scissors" && computerSelection === "rock" ) {
        computerScore++;
    } else if ( playerSelection === "scissors" && computerSelection === "paper" ) {
        playerScore++;
    } else if ( playerSelection === "paper" && computerSelection === "rock" ) {
        playerScore++;
    }else if ( playerSelection === "paper" && computerSelection === "scissors" ){
        computerScore++;
    };

    let  scoreBoard = playerScore + " " + ":" + " " + computerScore;

    return alert(scoreBoard); 
}


// playRound ();
// playRound ();
// playRound ();
// playRound ();
// playRound ();


function matchScore () {

    if (playerScore > computerScore) {
        alert("player win");
    } else if ( playerScore < computerScore) {
        alert("you lose");
    }
};

matchScore();
