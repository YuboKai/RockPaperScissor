const rockbtn = document.createElement('button');
const paperbtn = document.createElement('button')
const scissorbtn = document.createElement('button');

rockbtn.value = "rock";
paperbtn.value = "paper";
scissorbtn.value = "scissor";

rockbtn.textContent = "rock";
paperbtn.textContent = "paper";
scissorbtn.textContent = "scissor";

const body = document.querySelector("body");
body.appendChild(rockbtn);
body.appendChild(paperbtn);
body.appendChild(scissorbtn);

//method to get computer choice
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

let aiScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('button');

//Game function to start the game
function game (){

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playerSelection = button.value;
      const aiChoice = getComputerChoice();
      outcomeText.textContent = (playRound(playerSelection,aiChoice));
      playerScoreText.textContent = `player score: ${playerScore}`;
      aiScoreText.textContent = `computer score: ${aiScore}`
      endGame();
    })
  } )

  const div = document.createElement('div');
  body.appendChild(div);
    
  let playerScoreText = document.createElement('p');
  playerScoreText.textContent = `player score: ${playerScore}`;
  div.appendChild(playerScoreText);
    
  const aiScoreText = document.createElement('p');
  aiScoreText.textContent =  `computer score: ${aiScore}`
  div.appendChild(aiScoreText)

  const outcomeText = document.createElement('p');
  div.appendChild(outcomeText);

  //function to end game once a score of 5 is reach
  function endGame(){
  if(playerScore == 5 || aiScore ==  5){
    buttons.forEach((button) => {
        button.disabled = true;
    }
    )
    let finalist = document.createElement('p')
    div.appendChild(finalist);
    if(playerScore == 5){
          finalist.textContent = 'you won the game'
        }
    else {
        finalist.textContent =  'AI won the game'
    }

    const restartbtn = document.createElement('button'); 
    restartbtn.textContent = 'restart';
    div.appendChild(restartbtn);
 
  restartbtn.addEventListener('click', () => {location.reload()})
  }
}  

//function that play on round
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
        return "you lose rock beats scissor"
      }
      else if ( playerSelection=="scissor" && computerSelection=="paper"){
        playerScore++;
        return "you win scissor beats paper";
      }
      else  if (playerSelection=="scissor" && computerSelection=="scissor"){
        return "it a tie";
      } 
  } 
}

game();