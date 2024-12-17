function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
  }
  
  
  function getHumanChoice(){
    let choice = prompt("Enter your choice:")
    return choice
  }
  
  let humanScore = 0
  let computerScore = 0
  
  function playGround(humanChoice,computerChoice){
  
    if(humanChoice===computerChoice)
      return ("its a draw")
    else if (humanChoice=="rock" && computerChoice=="paper"){
      computerScore ++
      return (`You lose! `)
    }else if (humanChoice=="rock" && computerChoice=="scissors"){
      humanScore ++
      return (`You win!`)
    }else if (humanChoice=="paper" && computerChoice=="scissors"){
      computerScore ++
     return (`you lose`)
    }else if (humanChoice=="paper" && computerChoice=="rock"){
      humanScore ++
      return (`You win!`)
    }else if (humanChoice=="scissors" && computerChoice=="rock"){
      computerScore++
      return (`You lose!`)
    }else if (humanChoice=="scissors" && computerChoice=="paper"){
      humanScore++
      return (`You win!`)
    }
  }
  
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  console.log(`You choose ${humanChoice}`)
  console.log(`Computer have choosen ${computerChoice}`);
  console.log(playGround(humanChoice,computerChoice))
  console.log(`Human Score : ${humanScore}`,"   ",`Computer Score : ${computerScore}`)
  
  
  
  
  
  