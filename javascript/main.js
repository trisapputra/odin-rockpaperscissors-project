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



// compare computer selection and player selection

let playerScore = 0;
let computerScore = 0;
function playRound (e) {


    let computerSelection = computerPlay();
    let playerSelection = e.target.className;
    
    if (playerScore == 5) {
        alert("player win"); playerScore = 0; computerScore = 0;
    } else if (computerScore == 5) {
        alert("you lose"); playerScore = 0; computerScore = 0;
    }


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


    let playerScoreDisplay = document.getElementById("playerScore");
    let compScoreDisplay = document.getElementById("compScore");
    playerScoreDisplay.textContent = playerScore;
    compScoreDisplay.textContent = computerScore;


    // if (playerScore == 5 || computerScore == 5) {

    // }

    

    // let  scoreBoard = playerScore + " " + ":" + " " + computerScore;

    // return alert(scoreBoard); 
}
    const btns = document.querySelectorAll('button')
    btns.forEach(btn => btn.addEventListener('click', playRound));
  
function matchScore () {

    if (playerScore > computerScore) {
        alert("player win");
    } else if ( playerScore < computerScore) {
        alert("you lose");
    }
};

// matchScore();
