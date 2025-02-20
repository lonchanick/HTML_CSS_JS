
const rockElement = document.getElementById('rock');
const paperElement = document.getElementById('paper');
const scissorsElement = document.getElementById('scissors');
const winnerElement = document.getElementById('winnerElement');

const roundResultText = document.getElementById('roundResultText');
const resetButtonElement = document.getElementById('resetButton');

const gamePanelVar = document.getElementById('gamePanel');

const playerMarcador = document.getElementById('playerMarcador');
const computadorMarcador = document.getElementById('computadorMarcador');
let playerMarcadorVar = 0;
let computadorMarcadorVar = 0;

const options = ['Rock','Paper','Scissors'];

rockElement.addEventListener('click',()=>{
    game("Rock");
    // alert('test');
});

paperElement.addEventListener('click', ()=>{
    game("Paper");
});

scissorsElement.addEventListener('click',()=>{
    game("Scissors");
});

resetButtonElement.addEventListener('click',()=>{
    resetGame();
});

function getRoundResults(userOption) {
    
    const computerOption = getComputerOption();
  
    if (hasPlayerWon(userOption, computerOption)) {
      playerMarcadorVar++;
      return `Player wins! ${userOption} beats ${computerOption}`;
    } else if (computerOption === userOption) {
      return `It's a tie! Both chose ${userOption}`;
    } else {
      computadorMarcadorVar++;
      return `Computer wins! ${computerOption} beats ${userOption}`;
    }
  }

function game(playerOption)
{
    roundResultText.innerText = getRoundResults(playerOption);
    computadorMarcador.innerText = computadorMarcadorVar;
    playerMarcador.innerText = playerMarcadorVar;

    if (playerMarcadorVar === 3 || computadorMarcadorVar === 3) {
        winnerElement.innerText = `${
        playerMarcadorVar === 3 ? "Player" : "Computer"
        } has won the game!`;

        resetButtonElement.style.display = "block";
        gamePanelVar.style.display = 'none';
        roundResultText.innerText = '';
    }
}

function getComputerOption()
{
    return options[Math.floor(Math.random()*3)];
}
function hasPlayerWon(playerOption, computerOption)
{
    return (playerOption==="Rock" && computerOption === "Scissors" ||
        playerOption==="Scissors" && computerOption === "Paper" ||
        playerOption ==="Paper" && computerOption === "Rock");

}

function test()
{
    for(let i=0; i<10; i++)
        console.log(`${i}) `+computerRandomOption());
}

function resetGame()
{
    playerMarcadorVar = 0;
    computadorMarcadorVar =0;

    playerMarcador.innerText = 0;
    computadorMarcador.innerText = 0;
    gamePanelVar.style.display = 'block';
    resetButtonElement.style.display = "none";
    roundResultText.style.display = "hide";
    winnerElement.innerText = "";
}