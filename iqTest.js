function iqTest(numbers){
  let unique;
  let notUnique;
  let oddOrEven = numbers.split(' ').map(x => parseInt(x) % 2);

  let evens = oddOrEven.filter(x => x === 0)
  let odds = oddOrEven.filter(x => x === 1)

  if(evens.length === 1){
    return oddOrEven.indexOf(0) + 1;
  } else if (odds.length === 1){
    return oddOrEven.indexOf(1) + 1;
  }
}

let diff = iqTest("2 4 7 8 10") // 3

console.log(diff)
