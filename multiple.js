function findNextMultiples(number, count) {
    const multiples = [];
    for (let i = 1; i <= count; i++) {
      multiples.push(number * (Math.floor((number * i) / number)));
    }
    return multiples;
  }
  
  const givenNumber = 7;
  const nextMultiplesCount = 5;
  
  const nextMultiples = findNextMultiples(givenNumber, nextMultiplesCount);
  console.log(nextMultiples);
  