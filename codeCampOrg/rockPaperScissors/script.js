
// const numbersContainer = document.getElementById('numbers');
// let temporalBag = [];

// for(let i=0; i<3; i++)
//     temporalBag.push(getRandomComputerResult());

// const constUniqueResult = [...new Set(temporalBag)];

// for(const item of constUniqueResult)
//     numbersContainer.insertAdjacentHTML("beforeend",item+" ");

// function getRandomComputerResult() {
//     const options = ["Rock", "Paper", "Scissors"];
//     return options[Math.floor(Math.random() *3)];
//   } 

const rockElement = document.getElementById('rock');
const paperElement = document.getElementById('paper');
const scissorsElement = document.getElementById('scissors');

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

function game(playerOption)
{
    const computerOption = getComputerOption();
    const hasPlayerWonVar = hasPlayerWon(playerOption, computerOption);
    //console.log(`${playerOption}  ${computerOption  } ${ hasPlayerWonVar}`);

    if(playerOption === computerOption)
    {
        roundResultText.innerText = "Es un empate.";
        return;
    }

    if(hasPlayerWonVar)
    {
        roundResultText.innerText = "Jugador a ganado esta ronda.";
        playerMarcadorVar++;
        playerMarcador.innerText = playerMarcadorVar;
    }else{
        roundResultText.innerText = "Computador a ganado esta ronda.";
        computadorMarcadorVar++;
        computadorMarcador.innerText = computadorMarcadorVar;
    }

    if(playerMarcadorVar === 3)
    {
        roundResultText.innerText="Jugador GANA!";
        resetButtonElement.style.display = "block";
        gamePanelVar.style.display = 'none';
        //resetGame();

    }else if(computadorMarcadorVar === 3)
    {
        roundResultText.innerText="Computador GANA!";
        resetButtonElement.style.display = "block";
        gamePanelVar.style.display = 'none';
        //resetGame();
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

}