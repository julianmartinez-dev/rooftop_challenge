const fs = require('fs');
const letters = JSON.parse(fs.readFileSync('./letters.json'));
const positions = JSON.parse(fs.readFileSync('./positions.json'));
const letterPositions = []
for (const property in letters) {
    letterPositions.push({
      letter: property,
      position: positions[letters[property]],
    });
}
let url = [];
letterPositions.forEach(e => {
    e.position.forEach(pos => {
        url[pos] = e.letter;
    });
});
url = url.join('');
console.log({url});
