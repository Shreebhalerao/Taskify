const express = require('express');
const router = express.Router();

const { createTodo, getAllTodos, updateTodo, deleteTodo, getImportantTodos, getCompletedTodos, getInCompleteTodos, getTodoDetails } = require('../controllers/todo');
const { auth } = require('../middleware/auth');

// create todo route
router.post('/create-todo', auth, createTodo)
router.post('/all-todos', auth, getAllTodos)
router.get('/important-todos', auth, getImportantTodos)
router.get('/completed-todos', auth, getCompletedTodos)
router.get('/incomplete-todos', auth, getInCompleteTodos)
router.put('/update-todo', auth, updateTodo)
router.delete('/delete-todo', auth, deleteTodo)
router.post('/todo-details', auth, getTodoDetails)


module.exports = router