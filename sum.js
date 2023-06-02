function checkSumEqualsThird(num1, num2, num3) {
    return num1 + num2 === num3 || num1 + num3 === num2 || num2 + num3 === num1;
  }
  
  const num1 = 5;
  const num2 = 8;
  const num3 = 13;
  
  const isSumEqualsThird = checkSumEqualsThird(num1, num2, num3);
  console.log(isSumEqualsThird);
  