const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cek keberadaan folder
const dir = './db';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
};

// Cek file dalam folder
const checkFIle = './db/data.json';
if (!fs.existsSync(checkFIle)) {
    fs.writeFileSync(checkFIle, '[]', 'utf-8');
};

// bikin readline
const exampleQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const addData = async() => {
    const name = await exampleQuestion('Siapa namamu: ');
    const age = await exampleQuestion('Berapa umurmu: ');
    const hobby = await exampleQuestion('Apa Hobimu: ');

    const data = { name, age, hobby };
    const fileDb = fs.readFileSync('./db/data.json', 'utf-8')
    const profile = JSON.parse(fileDb);

    profile.push(data);
    fs.writeFileSync('./db/data.json', JSON.stringify(profile));
    console.log('Succes created your profile');
    rl.close();
}
addData()