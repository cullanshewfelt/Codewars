let options = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function validSolution(board){
  let valid = true;
  let columnsMatrix = [];
  let sectionsMatrix = [];

  for(let x = 0; x < board.length; x++){
    let newColumn = [];
    for(let y = 0; y < board[x].length; y++){
      newColumn.push(board[y][x])
    }
    columnsMatrix.push(newColumn)
  }

  let ns = [...board]

  for(let x = 0; x < 9; x+=3){
    let newSection = []
    for(let y = 0; y < 9; y++){
      let newRow = []
      for(let z = x; z < x + 3; z++){
        newRow.push(ns[y][z])
      }
      newSection = newSection.concat(newRow)
      if (newSection.length === 9){
        sectionsMatrix.push(newSection);
        newSection = []
      }
    }
  }

  // console.log(33, sectionsMatrix)

  board.forEach(row => {
    let temp = [...options];
    row.forEach((cell, i) => {
      if(valid === false){
        return false;
      } else {
        if(cell === 0){
          valid = false;
          return false;
        } else {
          if(temp.includes(cell)){
            temp.splice(temp.indexOf(cell), 1);
          }
          if(temp.length === 0 && (i === (row.length - 1))){
            valid = true;
          } else if((i === (row.length - 1)) && temp.length !== 0){
            valid = false;
          } else {
            null
          }
        }
      }
    })
  })

  columnsMatrix.forEach(column => {
    let temp = [...options];
    column.forEach((cell, i) => {
      if(valid === false){
        return false;
      } else {
        if(cell === 0){
          valid = false;
          return false;
        } else {
          if(temp.includes(cell)){
            temp.splice(temp.indexOf(cell), 1);
          }
          if(temp.length === 0 && (i === (column.length - 1))){
            valid = true;
          } else if((i === (column.length - 1)) && temp.length !== 0){
            valid = false;
          } else {
            null
          }
        }
      }
    })
  })

  sectionsMatrix.forEach(section => {
    let temp = [...options];
    section.forEach((cell, i) => {
      if(valid === false){
        return false
      } else {
        if(temp.includes(cell)){
          temp.splice(temp.indexOf(cell), 1);
        }
        if(temp.length === 0 && (i === (section.length - 1))){
          valid = true;
        } else if((i === (section.length - 1)) && temp.length !== 0){
          valid = false;
        } else {
          null
        }
      }
    })
  })
  return valid
}


let answer = validSolution([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5]
])




// let answer = validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//             [6, 7, 2, 1, 9, 5, 3, 4, 8],
//             [1, 9, 8, 3, 4, 2, 5, 6, 7],
//             [8, 5, 9, 7, 6, 1, 4, 2, 3],
//             [4, 2, 6, 8, 5, 3, 7, 9, 1],
//             [7, 1, 3, 9, 2, 4, 8, 5, 6],
//             [9, 6, 1, 5, 3, 7, 2, 8, 4],
//             [2, 8, 7, 4, 1, 9, 6, 3, 5],
//             [3, 4, 5, 2, 8, 6, 1, 7, 9]])






console.log(answer)
