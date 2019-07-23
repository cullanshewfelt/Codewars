function validParentheses(parens){
  if(parens[0] !== '('){
    return false
  } else if (parens[parens.length - 1] !== ')'){
    return false
  } else if (parens.split('(').length - 1 !== parens.split(')').length - 1){
    return false;
  } else {
    return true
  }
}

let answer = validParentheses("())")
console.log(answer)
