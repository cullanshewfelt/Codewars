function dirReduc(arr){
  if (arr.length >= 1){
    for(let i = 1; i < arr.length; i++){
      if((arr[i] === 'EAST' && arr[i - 1] === "WEST") || (arr[i] === 'WEST' && arr[i - 1] === "EAST")){
        arr.splice(i - 1, 1);
        arr.splice(i - 1, 1);
        return dirReduc(arr);
      } else if((arr[i] === 'NORTH' && arr[i - 1] === "SOUTH") || (arr[i] === 'SOUTH' && arr[i - 1] === "NORTH")){
        arr.splice(i - 1, 1);
        arr.splice(i - 1, 1);
        return dirReduc(arr);
      }
    }
  } else {
    return []
  }
  return arr;
}

let answer = dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
console.log(21, answer)
