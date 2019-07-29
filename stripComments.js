function solution(input, markers) {
  // let string =JSON.stringify(input);
  const commentMarkers = markers.join('')
  let regex = new RegExp(`\\s*[${commentMarkers}][^${commentMarkers}\\\\\\n]+`, 'g');
  let x = input.replace(regex, '').trim();
  return x
};


let x = solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])
// console.log(x)

// "apples, plums\npears\noranges"


// '% and bananas\npears\noranges '

// house, car % and tree\npark\nforrest !bush
