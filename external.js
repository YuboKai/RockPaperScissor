function getComputerChoice(){
  const a = "rock";
  const b = "paper";
  const c = "scissor";

  const letters = 'abc';
  const length = letters.length;

  let aiChoice = letters.charAt(Math.floor(Math.random()* length));
  if(aiChoice == "a"){
      return a;
  }
  else if (aiChoice=="b"){
      return b;
  }
  else if (aiChoice=="c"){
      return c;
  }
  
}



let aiScore=0;
let playerScore = 0;

function playRound(playerSelection, computerSelection){
  if(playerSelection=="rock" && computerSelection=="paper"){
    aiScore++;
      return " you lose paper beats rock"
  }
  else if (playerSelection=="rock" && computerSelection=="scissor"){
    playerScore++;
    return "you win rock beats scissors"
  }
  else if ( playerSelection=="rock" && computerSelection=="rock"){
    return "it a tie"
  }
  else if( playerSelection=="paper"&& computerSelection=="rock"){
    playerScore++;
    return "you win  paper beats rock"
  }
  else if( playerSelection=="paper"&& computerSelection=="scissor"){
    aiScore++;
    return "you lose scissor beats paper"
  }
  else if( playerSelection=="paper"&& computerSelection=="paper"){
    return "it a tie "
  }
  else if( playerSelection=="scissor"&& computerSelection=="rock"){
    aiScore++;
    return "you lose roack beats scissor"
  }
  else if ( playerSelection=="scissor" && computerSelection=="paper"){
    playerScore++;
    return "you win scissor beats paper";
  }
  else  if (playerSelection=="scissor" && computerSelection=="scissor"){
    return "it a tie";
}

}

function game(){
  for(let i =0; i<5; i++){
    let player = prompt("pick you weapon",).toLowerCase();
    let computer = getComputerChoice().toLowerCase();
    console.log(playRound(player, computer));
 
}
  console.log("AI score" + aiScore);
  console.log("Your score" + playerScore);
}

game();
