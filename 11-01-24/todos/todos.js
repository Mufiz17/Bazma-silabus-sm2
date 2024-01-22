const generateRandomId = require('./generatedRandomId');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Checkk + Create Folder
const dir = './db';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
};

// Checkk + Create File
const file = './db/todos.json';
if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '[]', 'utf-8');
};

// Todo Question
const todoQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Preview Todo
const todos = () => {
    const fileTodos = fs.readFileSync(file, 'utf-8');
    const data = JSON.parse(fileTodos);
    console.log(data);
    rl.close();
};

// Add Todo
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

// Searching Id
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

// Updated by Id
const updatedById = (id, updatedTodo) => {
    const ourFile = fs.readFileSync(file, 'utf-8');
    const data = JSON.parse(ourFile);
    const index = data.findIndex(todo => todo.id === id);

    if (index !== -1) {
        data[index] = {...data[index], ...updatedTodo };
        fs.writeFileSync(file, JSON.stringify(data));
        console.log('-----Succesfully updated-----');
    } else {
        console.log(`-----id ${id} not found-----`);
    };
    rl.close();
};

// Remove by Id
const removeById = (id) => {
    const ourFile = fs.readFileSync(file, 'utf-8');
    const data = JSON.parse(ourFile);
    const filterTodos = data.filter(todo => todo.id !== id);

    if (filterTodos.length < data.length) {
        fs.writeFileSync(file, JSON.stringify(filterTodos));
        console.log('-----Succesfully removed-----');
    } else {
        console.log(`-----id ${id} not found-----`);
    };
    rl.close();
};

module.exports = { todoQuestion, todos, storeTodo, getById, updatedById, removeById };