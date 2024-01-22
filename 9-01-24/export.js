const { getClassDes, getClass, getItem, getNameKelas, getPromise } = require('./arsitektur')
console.log(getClass(1));
console.log('--- ---');
console.log(getClassDes(1));
console.log('--- ---');
console.log(getItem(2));
console.log('--- ---')
console.log(getNameKelas(3))
console.log('--- ---')

getPromise(1)
    .then((kelasSija) => {
        console.log(kelasSija)
    });