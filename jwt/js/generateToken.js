const jwt = require('jsonwebtoken');
const scrtKey = '@smktibazma';
const payload = {
    uId: 1,
    uName: 'John Doe',
    cls: 'XI-SIJA'
};
const token = jwt.sign(payload, scrtKey);
console.log(token);