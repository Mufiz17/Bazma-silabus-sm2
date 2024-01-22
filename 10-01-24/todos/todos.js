const generateRandomId = require('./generatedRandomId');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cek Folder
const dir = './db';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
};

// Cek File
const file = './db/todos.json';
if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '[]', 'utf-8');
};

// Bikin Todo
const todoQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Menampilkan Todo
const todos = () => {
    const fileTodos = fs.readFileSync(file, 'utf-8');
    const data = JSON.parse(fileTodos);
    console.log(data);
    rl.close();
};

// Menambah Data Todo
const storeTodo = (title, description, status) => {
    const id = generateRandomId(8);
    const dataTodo = { id, title, description, status };
    const ourfile = fs.readFileSync(file, 'utf-8');

    const data = JSON.parse(ourfile);
    data.push(dataTodo);
    fs.writeFileSync(file, JSON.stringify(data), 'utf-8');
    console.log('-----succesfully added-----');
    rl.close();
}

// mencari id
const getById = (id) => {
    const ourFile = fs.readFileSync(file, 'utf-8');
    const data = JSON.parse(ourFile);
    const findTodId = data.find(todo => todo.id === id);
    if (findTodId) {
        console.log(`id ${id} found`);
        console.log(findTodId);
    } else {
        console.log(`id ${id} not found`);
    }
    rl.close();
}

// updated
const updatedById = (id, updatedTodo) => {
    const ourFile = fs.readFileSync(file, 'utf-8');
    const data = JSON.parse(ourFile);
    const Index = data.findIndex(todo => todo.id === id);
    if (Index !== -1) {

    }
}

module.exports = { todoQuestion, todos, storeTodo, getById };