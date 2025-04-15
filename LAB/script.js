function checkForStraights(roll) {
  // Convert roll to array of numbers
  let dice = typeof roll === "string" ? roll.split("").map(Number) : roll;

  // Remove duplicates and sort
  let uniqueSorted = [...new Set(dice)].sort((a, b) => a - b);

  // Helper to check for a straight of given length
  function hasStraight(arr, length) {
    for (let i = 0; i <= arr.length - length; i++) {
      let isStraight = true;
      for (let j = 1; j < length; j++) {
        if (arr[i + j] !== arr[i] + j) {
          isStraight = false;
          break;
        }
      }
      if (isStraight) return true;
    }
    return false;
  }

  // Check for large straight (5 consecutive)
  if (uniqueSorted.length === 5 && hasStraight(uniqueSorted, 5))
  {
    updateRadioOption(4, 40);
    // return 40;
  }

  // Check for small straight (4 consecutive)
  if (uniqueSorted.length >= 4 && hasStraight(uniqueSorted, 4))
  { 
    updateRadioOption(3, 30);
    // return 30;
  }

  updateRadioOption(5, 0);
}

console.log(checkForStraights([1,2,3,4,5]),[1,2,3,4,5]);