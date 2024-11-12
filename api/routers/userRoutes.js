// routers/userRoutes.js
const { Router } = require('express');
const router = Router();
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');

// Rota para obter todos os usuários
router.get('/', getAllUsers);

// Rota para obter um usuário por ID
router.get('/:id', getUserById);

// Rota para atualizar um usuário
router.put('/:id', updateUser);

// Rota para excluir um usuário
router.delete('/:id', deleteUser);

module.exports = router;
