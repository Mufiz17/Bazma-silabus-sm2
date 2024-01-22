const { todoQuestion, getById } = require('./todos');

console.log('-----welcome-----')
const todo = async() => {
    const id = await todoQuestion('Masukan id: ')
    getById(id)
    console.log('-----Thank you-----')
}
todo()