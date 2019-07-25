function solution(input, markers) {
  // markers.push("\\\\")
  // console.log(markers)
  const commentMarkers = markers.join('')
  // console.log(commentMarkers)
  let regex = new RegExp(`[${commentMarkers}][^${commentMarkers}\\\\]+`, 'g');
  console.log(regex)
  let matches = input.match(regex);
  console.log(matches)
  console.log(regex.exec(input))
  // console.log(regex.exec(input))
};


let x = solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])
// console.log(x)

// "apples, plums\npears\noranges"


'% and bananas\npears\noranges '

house, car % and tree\npark\nforrest !bush
