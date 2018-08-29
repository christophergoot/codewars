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

 function solution(str){
	let arr = [];
	for (let i=0; i<str.length; i=i+2) {
	  if (str[i+1]) arr.push(`${str[i]}${str[i+1]}`);
	  else arr.push(`${str[i]}_`);
	}
	return arr;
 }

// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
 function longestConsec(strarr, k) {
	let longStr = '';
	if (strarr.length < k) return ''
	else if (strarr.length === 0) return ''
	else {
		for (let i=0; i<=strarr.length-k; i++) {
			let tempStr = ''
			for (let i2=0; i2<k; i2++) {
				tempStr += strarr[i+i2];
			}
			if (tempStr.length > longStr.length) longStr = tempStr;
		}
	}
	return longStr;
}


module.exports = {
	songDecoder,
	tripledouble,
	solution,
	longestConsec
}