const { updatedById, todoQuestion } = require('./todos');

console.log('-----Welcome-----');
const update = async() => {
    const id = await todoQuestion('Masukan id: ')
    const title = await todoQuestion('Masukan judul: ');
    const description = await todoQuestion('Masukan deskripsi: ');
    const status = await todoQuestion('Masukan status: ');
    updatedById(id, { title, description, status });
    console.log('-----Thank you-----')
};
update();