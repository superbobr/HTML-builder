const fs = require('fs');
const path = require('path');
const { stdout } = process;


let pathFile = path.join(__dirname, 'text.txt');
let readFile = fs.createReadStream(pathFile, 'utf-8');
readFile.on('data', line => stdout.write(line));
