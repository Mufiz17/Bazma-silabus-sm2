const database = require('../db/connection.js');
const response = require('../helpers/response.js');

const getAllTodos = (req, res) => {
    const querySql = 'SELECT * FROM todo;';
    database.query(querySql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Gagal mengambil todos', error: err });
        }
        return res.status(200).json({ message: 'Sukses mendapatkan todos', data: results });
    });
};

const storeTodo = (req, res) => {
    const { title, description } = req.body;

    if (!title && !description) {
        return res.status(400).json({
            message: 'Eror Validation',
            data: {
                title: 'Title Wajib diisi',
                description: 'Description wajib diisi'
            }
        });
    } else if (!title) {
        return res.status(400).json({
            message: 'Title harus diisi',
            data: {
                title: 'Title Wajib diisi',
            }
        });
    } else if (!description) {
        return res.status(400).json({
            message: 'description harus diisi',
            data: {
                description: 'Description wajib diisi'
            }
        });
    }

    database.query('INSERT INTO todo (title, description) VALUES (?, ?)', [title, description], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Gagal menyimpan todo', error: err });
        }
        return res.status(200).json({ message: 'Todo berhasil disimpan' });
    });
};

const deleteTodo = (req, res) => {
    const { id } = req.params;
    database.query('DELETE FROM todo WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Gagal menghapus todo', error: err });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Todo tidak ditemukan' });
        }
        return res.status(200).json({ message: 'Todo berhasil dihapus' });
    });
};

const updateTodo = (req, res) => {
    const { title, description } = req.body;
    const { id } = req.params;

    database.query('SELECT * FROM todo WHERE id = ?', [id], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Gagal mengambil data todo', error: err });
        }

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Todo dengan ID tersebut tidak ditemukan' });
        }

        if (!title && !description) {
            return res.status(400).json({
                message: 'Eror Validation',
                data: {
                    title: 'Title Wajib diisi',
                    description: 'Description wajib diisi'
                }
            });
        } else if (!title) {
            return res.status(400).json({
                message: 'Title harus diisi',
                data: {
                    title: 'Title Wajib diisi',
                }
            });
        } else if (!description) {
            return res.status(400).json({
                message: 'description harus diisi',
                data: {
                    description: 'Description wajib diisi'
                }
            });
        }
    });
}


const getTodoById = (req, res) => {
    const id = req.params.id;
    database.query('SELECT * FROM todo WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Gagal mengambil todo', error: err });
        }
        return res.status(200).json({ message: 'Sukses mendapatkan todo', data: results });
    });
};

module.exports = {
    getAllTodos,
    storeTodo,
    deleteTodo,
    updateTodo,
    getTodoById
};