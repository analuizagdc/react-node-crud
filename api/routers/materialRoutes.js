// routers/materialRoutes.js
const { Router } = require('express');
const router = Router();
const { getAllMaterials, createMaterial } = require('../controllers/materialController');

// Rota para obter todos os materiais
router.get('/', getAllMaterials);

// Rota para criar um novo material
router.post('/', createMaterial);

module.exports = router;
