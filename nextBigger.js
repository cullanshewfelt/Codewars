function nextBigger(n){
  let pivot = -1;
  let nArray = n.toString().split('');

  for(let x = nArray.length - 1; x >= 0; x--){
    if(+nArray[x] > +nArray[x - 1]){
      pivot = x - 1;
      break;
    }
  }
  if(pivot === -1){
    return pivot;
  }

  let right = nArray.splice(pivot);

  pivot = right.splice(0, 1)[0];

  let nextBiggest = null;
  let nextBiggestIndex = null;

  for (let y = 0; y < right.length; y++) {
    if (right[y] > pivot) {
      if (nextBiggest == null || right[y] < nextBiggest) {
        nextBiggest = right[y];
        nextBiggestIndex = y;
      }
    }
  }

  if (nextBiggestIndex == null) return -1;

  right.splice(nextBiggestIndex, 1);
  right.push(pivot);
  right = right.sort();

  var newNumber = +nArray.concat([nextBiggest]).concat(right).join('');
  if (newNumber < n) return -1;
  return newNumber;
}


nextBigger(2017)
