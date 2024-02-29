const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./db/connection');

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
        } else {
            res.json({
                message: 'success',
                data: results
            }, 200);
        };
    });
});

// menambahkan data baru
app.post('/api/todo', (req, res) => {
    const { title, description } = req.body;
    database.query('INSERT INTO todo (title, description) VALUES (?,?)', [title, description], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                message: 'success'
            }, 201);
        };
    });
})

// menghapuos data

app.delete('/api/todo/:id', (req, res) => {
    const { id } = req.params;
    database.query('DELETE FROM todo WHERE id =?', [id], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                message: 'success'
            }, 201);
        };
    });
})

// update data
app.put('/api/todo/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    database.query('UPDATE todo SET title =?, description =? WHERE id =?', [title, description, id], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                message: 'success'
            }, 201);
        };
    });
})