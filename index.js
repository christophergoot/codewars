console.log('hello world');

// inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
function songDecoder(song){
	let orig = '';
	const words = song.split('WUB');
	words.forEach(word => {
		if (word !== '') {
			orig += word + ' ';
			console.log('word', word);
		}
	})
	return orig.trim();
  }


module.exports = {
	songDecoder
}