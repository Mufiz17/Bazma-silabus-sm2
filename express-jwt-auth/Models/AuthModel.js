const connection = require('./Config/connection.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(name, email, password, phone) {
    try {
        const [existingEmailUser] = await connection.query('SELECT * FROM user WHERE email = ?', [email]);
        if (existingEmailUser > 0) throw new Error("E-mail already in use.");
        const hashedPassword = await bcrypt.hash(password, 10);
        const [newUser] = await connection.query(
            'INSERT INTO user (name, email, password, phone) VALUES (?,?,?,?)', [name, email, password, phone]);
        return {
            success: true,
            message: 'User registered successfully',
            id: newUser
        }
    } catch (error) {
        return 'Error in registration';
    }
}