const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

let pathFile = path.join(__dirname, 'userInput.txt');
fs.open(pathFile, 'w', (err) => {
  if(err) throw err;        
});

stdout.write('Привет! Введите то, что хотите записать в файл:\n');
stdin.on('data', data => {
  let dataToString = data.toString();
  if(dataToString.trim() == 'exit') {
    process.exit();
}  
  fs.appendFile(pathFile, dataToString, function(error){    
    if(error) throw error;
});  
});
process.on('exit', () => stdout.write('Запись закончена! Удачи!'));
