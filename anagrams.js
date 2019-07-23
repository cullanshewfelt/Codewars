
function anagrams(word, words) {
	let anagramArray = [...words].map(x => {
		return x.split('').sort().join('') === word.split('').sort().join('') ?
			{ word: x, match: true } : { word: x, match: false }
	})
	return anagramArray.filter(x => x.match === true).map(y => y.word)
}

const answer = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);

console.log(answer)
