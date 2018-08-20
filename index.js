// inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
function songDecoder(song){
	let orig = '';
	const words = song.split('WUB');
	words.forEach(word => {
		if (word !== '') {
			orig += word + ' ';
		}
	})
	return orig.trim();
  }


//  which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.
function tripledouble(num1, num2) {
	let output = 0
	const trippleNums = [];
	const ints = (''+num1).split('');
	for (let i=0; i<ints.length; i++) {
		if (ints[i] === ints[i+1] && ints[i] === ints[i+2]) {
			trippleNums.push(ints[i]);
		}
	}
	if (trippleNums.length > 0) {
		const ints2 = (''+num2).split('');
		trippleNums.forEach(num => {
			for (let i=0; i<ints2.length; i++) {
				if (ints2[i] === num && ints2[i+1] === num) output = 1;
			}
		})
	}
	return output;
 }


module.exports = {
	songDecoder,
	tripledouble,
}