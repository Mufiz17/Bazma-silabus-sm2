const fs = require('fs');
const readline = require('readline');
const { json } = require('stream/consumers');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan nama anda: ', (name) => {
    rl.question('Masukan umur anda: ', (age) => {
        rl.question('Masukan nama sekolah anda: ', (school) => {
            // console.log(`Nama Lengkap saya ${name}. Umur saya ${age}. Saya sekolah di ${school}.`)
            const data = { name, age, school };
            const fileDb = fs.readFileSync('./db/data.json', 'utf-8');
            const profile = JSON.parse(fileDb);
            profile.push(data);
            fs.writeFileSync('./db/data.json', JSON.stringify(profile));
            console.log('Succes created your profile')
            rl.close();
        })
    })
})