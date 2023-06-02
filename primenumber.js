const isPrime = num => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  
  for (let i = 70; i >= 20; i--) {
    if (isPrime(i)) console.log(i); 
  }
  