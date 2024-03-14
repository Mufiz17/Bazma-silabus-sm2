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

    if (!title || !description) {
        return res.status(400).json({ message: 'Title dan description harus diisi' });
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

    if (!title && !description) {
        return res.status(400).json({ message: 'Minimal harus ada satu di antara title atau description yang diisi' });
    }

    if (!title) {
        database.query('SELECT title FROM todo WHERE id = ?', [id], (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Gagal memperbarui todo', error: err });
            }
            const oldTitle = results[0].title;
            database.query('UPDATE todo SET title = ?, description = ? WHERE id = ?', [oldTitle, description, id], (err, results) => {
                if (err) {
                    return res.status(500).json({ message: 'Gagal memperbarui todo', error: err });
                }
                return res.status(200).json({ message: 'Description berhasil diperbarui' });
            });
        });
    } else if (!description) {
        database.query('SELECT description FROM todo WHERE id = ?', [id], (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Gagal memperbarui todo', error: err });
            }
            const oldDescription = results[0].description;
            database.query('UPDATE todo SET title = ?, description = ? WHERE id = ?', [title, oldDescription, id], (err, results) => {
                if (err) {
                    return res.status(500).json({ message: 'Gagal memperbarui todo', error: err });
                }
                return res.status(200).json({ message: 'Title berhasil diperbarui' });
            });
        });
    } else {
        database.query('UPDATE todo SET title = ?, description = ? WHERE id = ?', [title, description, id], (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Gagal memperbarui todo', error: err });
            }
            return res.status(200).json({ message: 'Todo berhasil diperbarui' });
        });
    }
};

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