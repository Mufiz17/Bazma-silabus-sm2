const { removeById, todoQuestion } = require('./todos');

console.log('-----Welcome-----');
const remove = async() => {
    const id = await todoQuestion('Masukan id: ');
    removeById(id);
    console.log('-----Thank you-----')
}
remove()