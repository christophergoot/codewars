const { 
	songDecoder,
	tripledouble,
	solution
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
	})
});