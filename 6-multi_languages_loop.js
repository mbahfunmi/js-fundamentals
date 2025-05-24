const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

lconst languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

let result = [];
let i = 0;

while (i < languages.length) {
  result.push(languages[i]);
  i++;
}

process.stdout.write(result.join('\n'));
