// A program to print numbers which should coem after 3 non prime numbers . Develop between 10 to 100

const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  let nonPrimeCount = 0;
  for (let i = 10; i <= 100; i++) {
    if (!isPrime(i)) {
      nonPrimeCount++;
    } else {
      nonPrimeCount = 0;
    }
    
    if (nonPrimeCount === 3) {
      console.log(i);
    }
  }
  