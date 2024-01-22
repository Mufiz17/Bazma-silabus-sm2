const { storeTodo, todoQuestion } = require('./todos');

const addTodo = async() => {
    const title = await todoQuestion('Masukan judul todo: ');
    const description = await todoQuestion('Masukan deskripsi todo: ');
    const status = await todoQuestion('Masukan status todo: ');
    storeTodo(title, description, status);
}
addTodo()