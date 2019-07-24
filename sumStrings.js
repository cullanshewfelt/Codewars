function sumStrings(a,b) {
  let x = parseInt(a) + parseInt(b);
  console.log(x)
  console.log(4, +x.toString())
  console.log(Number(x.toString()).toPrecision())

  return Number(x.toString())
}

let answer = sumStrings('712569312664357328695151392', '8100824045303269669937');

console.log(answer)
