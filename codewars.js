let count = 0;

function persistence(n){
  let numsArry = n.toString().split('').map(x => parseInt(x));
  let newCount = 0;

  let multiply = (numsArry) => {
    return numsArry.reduce((accum, curr) => {
      return accum * curr
    }, 1)}

  if(n.toString().length !== 1){
    let newValue = multiply(numsArry)
    count ++;
    return persistence(newValue)
  } else {
    newCount = count;
    count = 0;
    return newCount;
  }
}

persistence(999);
