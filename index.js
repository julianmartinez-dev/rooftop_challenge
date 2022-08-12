const fs = require('fs');

const letters = JSON.parse(fs.readFileSync('./letters.json'));
const positions = JSON.parse(fs.readFileSync('./positions.json'));

const lettersPositions = new Map();
for (const letter in letters) {
    lettersPositions.set(
     letter,
    positions[letters[letter]],
    );
}
console.log(lettersPositions);
let url = [];
lettersPositions.forEach( (positions, letter) =>{
    positions.forEach((position) => {
        url[position] = letter;
    });
})

url = url.join('');
console.log({url})
