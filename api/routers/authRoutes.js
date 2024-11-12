// routers/authRoutes.js
const { Router } = require('express');
const router = Router();
const { register, login } = require('../controllers/authController'); // Importa os controladores

// Rota de registro
router.post('/register', register);

// Rota de login
router.post('/login', login);

module.exports = router;
