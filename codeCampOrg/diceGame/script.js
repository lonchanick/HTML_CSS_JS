const rulesContainer = document.getElementById('rules-container');
const showRulesBtn = document.getElementById('show-rules');
const dices = document.querySelectorAll('.dice');
const rollDiceBtn = document.getElementById('roll-dice');
const inputResultpanel = document.querySelectorAll('input');
const spanResultpanel = document.querySelectorAll('#result-panel span');
const nRoll = document.getElementById("n-roll");

showRulesBtn.addEventListener('click',()=>{ 
  rulesContainer.style.display = rulesContainer.style.display === 'block'
  ?'none'
  :'block'
});

rollDiceBtn.addEventListener('click',()=>{  
  nRoll.textContent = Number(nRoll.textContent)+1;
  const rollDie = () => Math.floor(Math.random() * 6) + 1;
  let diceNumbers=[];
  for (let index = 0; index < 5; index++) {
    diceNumbers.push(rollDie());
  }
  dices.forEach((el,index)=> el.textContent = diceNumbers[index]);
  //then update result pane
  updateResultPanel();
});

const updateResultPanel = ()=>{
  
  let isThreeOfaKind = false;
  let isFourOfaKind = false;
  let isSmallStraight = false;
  let isLargeStraight = false;
  
  
  const numbers = Array.from(dices).map(el => Number(el.textContent));
  const countNumber = {};

  //moda
  numbers.forEach(n => {
    countNumber[n] = (countNumber[n] || 0) + 1;
  })

  for(const key in countNumber)
  {
    if(countNumber[key]>=3)
      isThreeOfaKind=true;
    
    if(countNumber[key]>=4)
      isFourOfaKind=true;
  }

  switch(consecutiveCount(numbers))
  {
    case 4:
      isSmallStraight = true;
      break;
    case 5:
      isLargeStraight = true;
      break; 
  }

  const checks = [
    {condition: isThreeOfaKind, message: "is Three of a Kind" ,index: 0, points: 10},
    {condition: isFourOfaKind, message: "is Four of a Kind" ,index: 1, points: 20},
    {condition: isSmallStraight, message: "is small straight" ,index: 2, points: 30},
    {condition: isLargeStraight, message: "is large straight" ,index: 3, points: 40},
  ]
   
  checks.forEach(({condition,index, points}) => {
    if(condition)
    {
      inputResultpanel[index].disabled = false;
      spanResultpanel[index].textContent = ` , Score = ${points}`;
    }
  });
   
};

const consecutiveCount =(arr) =>{
  // Step 1: Remove duplicates and sort the array
  const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);

  function countRecursive(index, currentStreak, maxStreak) {
    if (index >= uniqueSorted.length) return maxStreak;

    if (uniqueSorted[index] === uniqueSorted[index - 1] + 1) {
      return countRecursive(index + 1, currentStreak + 1, Math.max(maxStreak, currentStreak + 1));
    } else {
      return countRecursive(index + 1, 1, maxStreak);
    }
  }

  if (uniqueSorted.length === 0) return 0;
  return countRecursive(1, 1, 1);
}


