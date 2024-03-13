const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./db/connection');
const response = require('./helpers/response')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const PORT = 6666;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${PORT}`);
})

// get data todoss = localhost:6000/api/todos/ localhost:6000/todos
app.get('/api/todo', (req, res) => {
    database.query('SELECT * FROM todo', (err, results) => {
        if (err) {
            console.log(err);
        }
        response(res, 200, { message: 'Succes get Todos', data: results })
    });
});

// menambahkan data baru dan buat validasi tidak bisa di spam dan data tidak boleh kosong
app.post('/api/todo', (req, res) => {
    const { title, description } = req.body;
    database.query('INSERT INTO todo (title, description) VALUES (?,?)', [title, description], (err, results) => {
        if (err) {
            console.log(err);
        }
        response(res, 200, { message: 'Succes get Todos', data: results })
    });
})

// menghapus data dengan validasi tidak bisa
app.delete('/api/todo/:id', (req, res) => {
    const { id } = req.params;
    database.query('DELETE FROM todo WHERE id =?', [id], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            if (results.length === 0) {
                response(res, 400, { message: 'Succes get Todos', data: results })
            }
            response(res, 200, { message: 'Succes get Todos', data: results })
        };
    });
})

// update data DENGAN VALIDASI DATA TIDAK BOLEH KOSONG DAN KALAU SUDAH ADA ISINYA DI MYSQL MAKA BARU BOLEH KOSONG
app.put('/api/todo/:id', (req, res) => {
    const { title, description } = req.body;
    const { id } = req.params;
    database.query('UPDATE todo SET title =?, description =? WHERE id =?', [title, description, id], (err, results) => {
        if (err) {
            console.log(err);
        }
        response(res, 200, { message: 'Succes get Todos', data: results })
    });
});

// mencari berdasarkan id
app.get('/api/todo/:id', (req, res) => {
    const id = req.params;
    database.query('SELECT * FROM todo WHERE id =?', [id], (err, results) => {
        if (err) {
            console.log(err);
        }
        response(res, 200, { message: 'Succes get Todos', data: results })
    });
})