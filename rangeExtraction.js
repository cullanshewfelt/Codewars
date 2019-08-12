function rangeExtraction(list){

  let ranges = list.reduce((acc, curr, i, array) => {
    console.log('curr', curr);

    let range = [array[i]];
    for(let x = i; x < array.length; x++){
      array[x] === range[range.length - 1] + 1 && range.push(array[x])
    }

    range = range.length > 1 ? [range[0], range[range.length -1]] : [range[0]];

    console.log('range', range);

    if(range.length > 1){
      if(curr >= range[0] && curr <= range[1]){
        return [...acc];
      } else {
        return [...acc, [range[0], range[1]]]
      }
    } else {
      if(acc.length !== 0){
        return  [...acc, [range[0]]];
      } else {
        return [[range[0]]];
      }
    }
  }, []);
  console.log(ranges);
}

let x = rangeExtraction([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// console.log(x)



// if(range.length > 1){
//   if(curr > range[0] && current < range[1]){
//     return [...acc];
//   }
// } else {
//   return range.length > 1 ? [...acc, [range[0], range[range.length - 1]]] : [...acc, [range[0]]];
// }
