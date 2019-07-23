function wave(word) {
  let waveWords = [];
  for (let i = 0; i < word.length; i++) {
    let wordArray = word.split('');
    wordArray[i] = word[i].toUpperCase();
    if (wordArray[i] !== ' ') {
      waveWords.push(wordArray.join(''))
    }
  }
  // console.log(waveWords)
  return waveWords;
}

wave(" gap ")
