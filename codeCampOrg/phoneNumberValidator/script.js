const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');
const validsContainer = document.getElementById('valid');
const invalidsContainer = document.getElementById('invalid');

const valids = [
    "1 555-555-5555",
    "1 (555) 555-5555",
    "5555555555",
    "555-555-5555",
    "(555)555-5555",
    "1(555)555-5555",
    "1 555 555 5555",
    "1 456 789 4444"
];

const invalids = [
    "555-5555",
    "5555555",
    "1 555)555-5555",
    "123**&!!asdf#",
    "(6054756961)",
    "2 (757) 622-7382",
    "0 (757) 622-7382",
    "-1 (757) 622-7382",
    "2 757 622-7382",
    "10 (757) 622-7382",
    "27576227382",
    "(275)76227382",
    "2(757)6227382",
    "2(757)622-7382",
    "555)-555-5555",
    "(555-555-5555",
    "(555)5(55?)-5555",
    "11 555-555-5555"
];

 
const myRegex = /^((1\s)|1)?\s?(([0-9]{3})|(\([0-9]{3}\)))[\s-]*([0-9]{3})[\s-]*([0-9]{4})$/; 
const codeCampOrg = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;

checkBtn.addEventListener('click',()=>
{
    !input.value === true ? alert('Please provide a phone number')
    : alert(`${input.value} <=====> ${reg8}\n${reg8.test(input.value)}`);
 
});

clearBtn.addEventListener('click',()=>
{
    resultDiv.textContent='';
});

let validsAcc = '';

valids.forEach(str => {
    myRegex.test(str) ?
    validsAcc += `<p>${str} == IS VALID</p>`
    : validsAcc += `<p>${str} == NOT VALID</p>`
});
validsContainer.innerHTML+=validsAcc;

let notValidAcc = '';
invalids.forEach(str => {
    myRegex.test(str) ?
    notValidAcc += `<p>${str} == IS VALID</p>`
    : notValidAcc += `<p>${str} == NOT VALID</p>`
}) 
invalidsContainer.innerHTML+=notValidAcc;


