function sortAscending(a, b, c) {
    if (a > b) [a, b] = [b, a];
    if (b > c) [b, c] = [c, b];
    if (a > b) [a, b] = [b, a];
    return [a, b, c];
  }
  
  const num1 = 9;
  const num2 = 3;
  const num3 = 6;
  
  const sortedNumbers = sortAscending(num1, num2, num3);
  console.log(sortedNumbers);
  