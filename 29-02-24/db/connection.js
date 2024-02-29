const mysql = require('mysql2');

const conneection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '<...>',
    database: '...'
})