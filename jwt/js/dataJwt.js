const jwt = require('jsonwebtoken');
const scrtKey = '@smktibazma';

function createToken(name, clas, addres, hoby) {
    const data = { name, clas, addres, hoby };
    return jwt.sign(data, scrtKey);
};

function verifyToken(token) {
    try {
        return jwt.verify(token, scrtKey);
    } catch (err) {
        return err;
    }
};

const student = {
    id: 2,
    name: 'Muhammad Iqbal',
    clas: 'XI RPL',
    address: 'Jakarta',
    hoby: 'Coding'
}

const token = createToken(student.name, student.clas, student.address, student.hoby);

console.log('Token');
console.log(token);