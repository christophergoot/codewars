const { 
	songDecoder,
	tripledouble,
	solution,
	longestConsec,
	bubblesortOnce
 } = require('../index');

const assert = require('assert');
describe('Code Wars', function() {
    it('WUB WUB Should WUB', function() {
	  assert.equal(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
	  assert.equal(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
	  assert.equal(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");
    }),
  	it('trippleDouble', function() {
		assert.equal(tripledouble(451999277,41177722899),1);
		assert.equal(tripledouble(1222345, 12345),0);
		assert.equal(tripledouble(12345, 12345),0);
		assert.equal(tripledouble(666789, 12345667),1);
		assert.equal(tripledouble(10560002, 100),1);
		assert.equal(tripledouble(662137333777555500, 2885957744),1);
	}),
	it('Split Strings', () => {
		assert.deepEqual(solution('abc'),['ab','c_']);
		assert.deepEqual(solution('abcdef'),['ab', 'cd', 'ef']);
	}),
	it('longestConsec', () => {
		assert.equal(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta");
		assert.equal(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
		assert.equal(longestConsec([], 3), "");
		assert.equal(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
		assert.equal(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu");
		assert.equal(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "");
		assert.equal(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz");
		assert.equal(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "");
		assert.equal(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "");
	}),
	it('bubbleSortOnce', () => {
		assert.deepEqual(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 1, 2, 4, 6, 8, 9]);
	})
});