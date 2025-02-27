
const userOptionElement = document.getElementById('userOption');
const resultsElement = document.getElementById('results');
const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const defaultDate = `${year}-${month}-${day}`;
resultsElement.textContent = defaultDate;

 function formater(str)
 {
    switch(str)
    {
        case 'yyyy-mm-dd':
            return defaultDate;
        case 'dd-mm-yyyy':
            return getReverseDate(defaultDate);
        case "dd-mm-yyy-h-mm":
            return `${defaultDate} ${hours} Hours ${minutes} Minutes`;
        default:
            return defaultDate;
    }
 }

 function getReverseDate(str) { return str.split('-').reverse().join('-'); }

//  console.log(formater('yyyy-mm-dd'));
//  console.log(formater('dd-mm-yyyy'));
//  console.log(formater(' '));

userOptionElement.addEventListener('change',()=>{
    const result = formater(userOptionElement.value);
    console.log(result);
    resultsElement.innerHTML=`<p>${result}</p>`;
});