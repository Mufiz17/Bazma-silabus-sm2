const fs = require('fs');
const readline = require('readline');
const generatedRandomId = require('./generatedRandomId');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Check and Create folder
const dir = './db';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
};

// Check and Create file
const file = './db/db.json';
if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '[]', 'utf-8');
};

// Read db
const preview = () => {
    const ourFile = fs.readFileSync(file, 'utf-8');
    const data = JSON.parse(ourFile);
    console.log(data);
    rl.close();
};

// Question 
const question = (quest) => {
    return new Promise((resolve, reject) => {
        rl.question(quest, (answer) => {
            resolve(answer);
        });
    });
};


// Add in db
const add = (title, desc, sit, payment, qty, other, rateUs) => {
    const id = generatedRandomId(8);
    const dataDb = { id, title, desc, sit, payment, qty, other, rateUs };
    const ourFile = fs.readFileSync(file, 'utf-8');
    const data = JSON.parse(ourFile);
    data.push(dataDb);
    fs.writeFileSync(file, JSON.stringify(data));
    console.log('Success added to queue');
    rl.close();
};

// Remove in db
const removeById = (id) => {
    const ourFile = fs.readFileSync(file, 'utf-8');
    const data = JSON.parse(ourFile);
    const remove = data.filter(base => base.id !== id);
    if (remove.length < data.length) {
        fs.writeFileSync(file, JSON.stringify(remove));
        console.log('Success removed from db');
    } else {
        console.log('No such id');
    };
    rl.close();
};

// update in db
const updateById = (id, updateDb) => {
    const ourFile = fs.readFileSync(file, 'utf-8');
    const data = JSON.parse(ourFile);
    const update = data.findIndex(base => base.id === id);
    if (update !== -1) {
        data[update] = {...data[update], ...updateDb };
        fs.writeFileSync(file, JSON.stringify(data));
        console.log('Success update in db');
    } else {
        console.log('No such id');
    };
    rl.close();
};

// Searching by id
const search = (id) => {
    const ourFIle = fs.readFileSync(file, 'utf-8');
    const data = JSON.parse(ourFIle);
    const find = data.find(base => base.id === id);
    if (find) {
        console.log(`id ${id} found`);
        console.log(find);
        return find;
    } else {
        console.log('No such id');
        return undefined;
    };
};

module.exports = {
    question,
    preview,
    add,
    removeById,
    updateById,
    search,
    rl,
    readline
};