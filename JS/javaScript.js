let isError = false;

const calorieCounter = document.getElementById('calorie-counter');
const addEntryButton = document.getElementById('entry-button');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output'); 
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');


function cleanInputString(str)
{ 
    const regex = /[+-\s]/g;
    return str.replace(regex,"");
} 

function isInvalidInput(str)
{
    // const regex =/[0-9]+e[0-9]+/i; //the i stands for insensitive
    const regex =/\d+e\d+/i; //the i stands for insensitive
    return str.match(regex);
}

function addEntry()
{
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer
  .querySelectorAll('input[type="text"]').length+1;

  const HTMLString  
  = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"><br>
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"><br>`;
  
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

addEntryButton.addEventListener('click', addEntry);