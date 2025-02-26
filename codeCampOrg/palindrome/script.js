const checkButton = document.getElementById('check-btn');
const inputElement = document.getElementById('text-input');
const resultElement = document.getElementById('result');

function palindrome()
{
    const inputElementValue =  inputElement.value;
    if(inputElementValue === ""){alert("Please input a value" ); return;}  
    
    if(isPalindrome(inputElementValue))
        showResult(inputElementValue);
    else
        showResult(inputElementValue, false);
}

function showResult(result, flag=true)
{
    console.log(result);
    if(flag)
        resultElement.innerHTML = `<p>${result} is a palindrome</p>`;
    else
        resultElement.innerHTML = `<p>${result} is not a palindrome</p>`;
}

function isPalindrome(str)
{
    const cleanInput = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(cleanInput);
    function calculatePalindrome(str) {
        let left = 0;
        let right = str.length - 1;
    
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    return calculatePalindrome(cleanInput);
}

checkButton.addEventListener("click",palindrome);