function permutations(string) {
  let result = [];
  let letterArray = string.split('');
  const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  permute(letterArray);
  result = result.map(x => x.join(''))
  let set = new Set(result);
  return [...set]
}

let answer = permutations('aabb');

console.log(answer)
