const inputNumber = document.querySelector('#inputNumber');
const calcButt = document.querySelector('#calcButton');

//calcs
const meanEl = document.querySelector('#mean strong');
const medianEl = document.querySelector('#median strong');
const modeEl = document.querySelector('#mode strong');
const rangeEl = document.querySelector('#range strong');
const varianceEl = document.querySelector('#variance strong');

//regex
const reg = /,\s*/g;

const mean = (array)=> (array.reduce((acc, el)=>acc+el, 0)/array.length).toFixed(2);

const median = (array)=>
{
    const arraySorted = array.toSorted((a,b)=> a-b);
    //is odd or even
    //this is my way
    // if(arraySorted.length%2)
    // {
    //     console.log('odd');
    //     return arraySorted[Math.floor(arraySorted.length/2)];
    // }else{
    //     console.log('even');
    //     const firstNum = arraySorted[arraySorted.length/2];
    //     const secondNum = arraySorted[(arraySorted.length/2)-1];
    //     const result = (firstNum+secondNum)/2;
    //     return result;
    // }

    //this is tutorial way
    return (arraySorted.length%2 === 0)
    ? mean([arraySorted[arraySorted.length/2], arraySorted[(arraySorted.length/2)-1]])
    : arraySorted[Math.floor(arraySorted.length/2)];
 
}

const mode = (array)=>
{
    array.sort();
    const modeObj = {};
    array.forEach(el =>{
        if(modeObj[el])
            modeObj[el]=modeObj[el]+1;
        else
            modeObj[el]=1;
    })

    //en caso de que todos los numeros ingresados sean los mismos
    if(new Set(Object.values(modeObj)).size === 1)
        return null; 

    const highest = Object.keys(modeObj)
    .sort((keyA,keyB)=> modeObj[keyB]-modeObj[keyA])[0];

    const modeResult = Object.keys(modeObj)
    .filter(key => modeObj[key] === modeObj[highest]).join(', ');
    
    return modeResult;
}

const range = (array)=>{
    if(array.length ===1)
        return array[0];

    array.sort();
    console.log(array);
    return array[array.length-1]-array[0];
};

const calculate = ()=>
{
    const inputs = inputNumber.value.split(reg).map(el => Number(el.trim()));
    
    meanEl.innerText += " "+mean(inputs);
    medianEl.innerText += " "+median(inputs);
    modeEl.innerText += " "+mode(inputs); 
    rangeEl.innerText += " "+range(inputs); 
    varianceEl.innerText += "I owe you this one!"; 
}



calcButt.addEventListener('click', calculate); 