//STEP 27

//median
const median = nums => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;
  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.ceil(middle)];
}

//average
const average = nums => sum(nums)/nums.length;

//determina si es even o odd
const isEven = num => num%2 === 0 ? true : false;

//suma un array
const sum = nums => nums.reduce((el,acc)=> acc+el);

//genera un array de numeros dentro de un rango especificado
const range = (start,end)=> Array(end-start+1).fill(start).map((el,idx)=> el+idx);

//genera un array de LETRAS dentro de un rango especificado
const charRange = (start, end)=>
range(start.charCodeAt(0),end.charCodeAt(0))
.map(code => String.fromCharCode(code));

//keep on track of functions
const spreadsheetFunctions = {
  sum,
  average,
  median
}

//exe zone
//this is trigered when the whole page is loaded
window.onload = ()=>
  {
    const container = document.getElementById('container');
    const letters = charRange('A','E');
    
    const createLabel = (name)=>{
    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = name;
    container.appendChild(label);
    }
  
    //renderiza todas las columnas A, B, C, Etc..
    letters.forEach(createLabel);
  
    //renderiza las filas 1, 2, 3, 4, etc...
    range(1,99).forEach(number =>  {
      createLabel(number);
      letters.forEach(letter => {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = number+letter;
        input.ariaLabel = number+letter;
        container.appendChild(input);
      });
    });
  
  }


// console.log(charRange('A','X'));
const arr = [1,2,3];
console.log(sum(arr));
console.log(average(arr));