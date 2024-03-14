const express = require('express');
const router = express.Router();

const TodoController = require('../controller/TodoController');

router.get('/', TodoController.getAllTodos);
router.post('/', TodoController.storeTodo);
router.delete('/:id', TodoController.deleteTodo);
router.put('/:id', TodoController.updateTodo);
router.get('/:id', TodoController.getTodoById);

module.exports = router