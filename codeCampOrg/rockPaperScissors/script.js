
const numbersContainer = document.getElementById('numbers');

for(let i=0; i<100; i++)
{ 
    let aux = getRandomComputerResult();
    numbersContainer.
    insertAdjacentHTML('beforeend',`<p>${i}) ${aux}</p>`);
    
}

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() *3)];
  } 