const fs = require('fs');

fs.writeFileSync('perkenalan.txt', 'Perkenalkan saya Mufiz');


const introduce = fs.readFileSync('perkenalan.txt');
console.log(introduce.toString());

fs.mkdirSync('./hello');

fs.unlinkSync('perkenalan.txt');

const exsistFile = fs.existsSync('export.js');
console.log('This file exsist?', exsistFile);

const intro = fs.existsSync('perkenalan.txt');
console.log('Is this file exsist?', intro);