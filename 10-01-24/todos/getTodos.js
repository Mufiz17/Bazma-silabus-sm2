const { todoQuestion, getById } = require('./todos');
const todo = async() => {
    const id = await todoQuestion('Masukan id: ')
    getById(id)
}
todo()