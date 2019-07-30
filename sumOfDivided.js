function sumOfDivided(lst) {
  let allFactors = [];

  const isPrime = num => {
    for(let i = 2; i < num; i++){
      if(num % i === 0){
        return false
      }
    }
    return num > 1
  }

  const refactor = num => {
    let factors = [];
    for(let i = 2; i <= num; i++){
      if(num % i === 0){
        isPrime(i) && factors.push(i)
      }
    }
    return factors;
  }

  allFactors = lst.map(number => ({
    total: number,
    factors: refactor(number)
  }));

  let primes = new Set(allFactors.reduce((acc, curr) => {
    return [...acc, ...curr.factors]
  }, []))

  primes = [...primes].sort((x, y) => x - y);

  const totalReducer = (currentPrime) => {
    return lst.reduce((acc, curr) => {
      return acc += curr % currentPrime === 0 ? curr : 0
    }, 0)
  }

  let answer = primes.reduce((acc, curr) => {
    return [...acc, [curr, totalReducer(curr)]]
  }, [])

  return answer
}

let x = sumOfDivided([1070, 1580, 2040, 1000, 1180, 1230, 1260, 1100, 1160, 1000]);

console.log(x)
