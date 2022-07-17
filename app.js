function computerPlay(items){
    
    return items[Math.floor(Math.random()*items.length)];
}
var playitems = ["Rock", "Paper", "Scissors"];
//console.log(computerPlay(playitems));



function playRound(playerSelection, computerSelection){

    if (computerSelection === playerSelection){
        return "play it again";
    }
    if (playerSelection !== "Rock"!== "Scissors" !== "Paper"  && computerSelection == "Rock" || computerSelection == "Scissors" || computerSelection == ""){
        return "invalid! play it again";
    }
    if (computerSelection == "Rock" && playerSelection == "Scissors"){
        return "Computer winns!";
    }
    if (computerSelection == "Scissors" && playerSelection == "Paper"){
        return "Computer winns!";
    }
    if (computerSelection == "Paper" && playerSelection == "Rock"){
        return "Computer winns!";
    }
    if (computerSelection == "Scissors" && playerSelection == "Rock"){
        return "You winn!";
    }
    if (computerSelection == "Paper" && playerSelection == "Scissors"){
        return "You winn!";
    }
    if (computerSelection == "Rock" && playerSelection == "Paper"){
        return "You winn!";
    }
}

function playerPlay() {
   return prompt();
}


function game(){
   
    var playerScore = 0;
    var computerScore = 0;

    for(let i = 0; i < 5; i++){
        console.log("Next Round no." + (i + 1));
        const playerSelection = playerPlay();
        console.log("Player: " + playerSelection);
       
        const computerSelection = computerPlay(playitems);
        console.log("computer: " + computerSelection);

        const displayScore = playRound(playerSelection, computerSelection);
        console.log(displayScore);
        
        if(displayScore === "You winn!") {
             playerScore = playerScore + 1;    
        }

        console.log("Player: " + playerScore);

        if(displayScore ===  "Computer winns!"){
            computerScore = computerScore + 1;    
        } 

        console.log("Computer:" + computerScore);
        
    } 

    if (computerScore > playerScore)
    {
        document.getElementById('result').innerHTML = "Computer won!";
        return false;
    } else if (computerScore < playerScore)
    {
        document.getElementById('result').innerHTML = "You are the winner!";
        return false;
    } else 
    {
        document.getElementById('result').innerHTML = "There is a tie, try it again!";
        return false;
    }
  
}

game();