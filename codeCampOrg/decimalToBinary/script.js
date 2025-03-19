const inputNumber = document.getElementById('inputNumber');
const result = document.getElementById('result');
const calculateButt = document.getElementById('calculate');

calculateButt.addEventListener('click', ()=>{
    checkInput()?
    result.innerHTML = `<p>${decimalToBinary(inputNumber.value)}</p>`
    : alert('invalid input value!')
});

function decimalToBinary(number)
{
    if(number === 1 || number === 0)
        return String(number);
    else
        return decimalToBinary(Math.floor(number/2))+number%2;
}

function checkInput()
{
    inputInt = parseInt(inputNumber.value);
    if(!inputNumber.value || isNaN(inputInt) || inputInt < 0)
        return false;
    else
        return true;
}