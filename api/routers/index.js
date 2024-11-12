// routers/index.js
const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const materialRoutes = require('./materialRoutes');
const collectionRoutes = require('./collectionRoutes');

// Rota de verificação
router.get('/', (req, res) => {
    res.send('API funcionando corretamente!');
});

// Usando as rotas
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/materials', materialRoutes);
router.use('/collections', collectionRoutes);

module.exports = router;
