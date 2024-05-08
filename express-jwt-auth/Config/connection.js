const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bazma_jwt',
    port: 3306,
    waitForConnections: false,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection;