var numbers = [2, 6, 9, 11, 17];
var newArray = [];

function square(a) {
  a.forEach((int) => {
    newArray.push(int * int)
  })
  return newArray;
}

function cube(a) {
  a.forEach((int) => {
    newArray.push(int * int * int)
  })
  return newArray;
}

function sum(a) {
  let newSum = 0;
  for (let i = 0; i < a.length; i++) {
    newSum += a[i];
  }
  return newSum;
}

function average(a) {
  let newAverage = 0;
  for (let i = 0; i < a.length; i++) {
    newAverage += a[i];
  }
  console.log(newAverage/a.length)
}

function odd(a) {
  a.forEach((int)=>{
    int%2 === 1 ? newArray.push(int) : null;
  })
  return newArray
}

function even(a) {
  a.forEach((int)=>{
    int%2 === 0 ? newArray.push(int) : null;
  })
  return newArray
}

average(numbers)
