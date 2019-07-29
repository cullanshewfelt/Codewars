function sumOfDivided(lst) {
  let factors = [];
  let allFactors = [];

  const isPrime = num => {
    for(let i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      }
    }
    return num > 1;
  }

  const refactor = numb => {
    let primes = [];
    for(let i = 2; i < numb; i++){
      if(numb % i === 0){
        primes.push(i)
      }
    }
  }


  lst.forEach(number => {
    factors = [];
    let y = isPrime(number) ? number :
    console.log(15, y)
    allFactors.push(y);
  });
  console.log(25, allFactors)
}

let answer = sumOfDivided([15,21,24,30,45]);

// console.log(answer)
