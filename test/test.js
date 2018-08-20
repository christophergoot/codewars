const { 
	songDecoder,
 } = require('../index');

const assert = require('assert');
describe('Code Wars', function() {
  describe('songDecoder()', function() {
    it('WUB WUB Should WUB', function() {
	  assert.equal(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
	  assert.equal(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
	  assert.equal(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");
    });
  });
});