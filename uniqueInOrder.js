var uniqueInOrder=function(iterable){
  let newArray = [];
  iterable[0] !== undefined && newArray.push(iterable[0]);
  for(let i = 1; i < iterable.length; i++){
    iterable[i] !== iterable[i - 1] && newArray.push(iterable[i])
  }
  return newArray
}





let answ = uniqueInOrder('AAAABBBCCDAABBB')
console.log(answ)
 // ['A','B','C','D','A','B']
