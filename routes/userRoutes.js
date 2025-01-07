// Routes for user-related operations (CRUD)

const express = require('express');
const router = express.Router();
const { createUser, getUsers, updateUser, deleteUser } = require('../controller/userController');

router.post('/users', createUser);
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;