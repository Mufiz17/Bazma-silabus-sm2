const { storeTodo, todoQuestion } = require('./todos');


console.log('-----Welcome-----')
const addTodo = async() => {
    const title = await todoQuestion('Masukan judul: ');
    const description = await todoQuestion('Masukan deskripsi: ');
    const status = await todoQuestion('Masukan status: ');
    storeTodo(title, description, status);
    console.log('-----Thank you-----')
}
addTodo()